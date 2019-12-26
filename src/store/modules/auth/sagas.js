import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import {
  signInSuccess,
  signFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { credential, password } = payload;

    const response = yield call(api.post, 'sessions', {
      credential,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/follow');
  } catch (error) {
    const message =
      error.response.status === 401
        ? 'Credenciais não confirmada.'
        : 'Falha na autenticação, verifique os seus dados.';

    toast.error(message);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados.');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export function* forgotPassword({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'forgot_password', {
      email,
      redirect_url: 'http://localhost:3000',
    });

    yield put(forgotPasswordSuccess());

    history.push('/');
  } catch (error) {
    toast.error('Falha na requisição, verifique seus dados.');

    yield put(forgotPasswordFailure());
  }
}

export function* resetPassword({ payload }) {
  try {
    const { recovery_token, password, password_confirmation } = payload;

    yield call(api.post, 'reset_password', {
      recovery_token,
      password,
      password_confirmation,
    });

    yield put(resetPasswordSuccess());

    history.push('/');
  } catch (error) {
    toast.error('Falha na requisição, verifique seus dados.');

    yield put(resetPasswordFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/FORGOT_PASSWORD_REQUEST', forgotPassword),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPassword),
]);
