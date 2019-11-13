import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { fetchSuccess, success, failure } from './actions';

export function* request({ payload }) {
  try {
    const { limit, page, organizationId } = payload;

    const response = yield call(
      api.get,
      `organizations/${organizationId}/users?page=${page}&limit=${limit}`
    );

    yield put(
      success({
        data: response.data.data,
        meta: {
          pages: response.data.lastPage,
          page: response.data.page,
          limit: response.data.perPage,
          total: parseInt(response.data.total, 10),
        },
      })
    );
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export function* fetch({ payload }) {
  try {
    const { organizationId, userId } = payload;

    const response = yield call(
      api.get,
      `organizations/${organizationId}/users/${userId}?organization=false`
    );

    yield put(fetchSuccess(response.data));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export function* sendConfirmation({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, `send_confirmation`, { email });
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export function* sendForgotPassword({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, `forgot_password`, {
      email,
      redirect_url: process.env.REACT_APP_URL,
    });
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export function* save({ payload }) {
  try {
    const { user, organizationId } = payload;

    yield call(api.post, `organizations/${organizationId}/users`, user);

    toast.success('Cadastro finalizado com sucesso.');
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export default all([
  takeLatest('@user/REQUEST', request),
  takeLatest('@user/FETCH', fetch),
  takeLatest('@user/SEND_CONFIRMATION', sendConfirmation),
  takeLatest('@user/SEND_FORGOT_PASSWORD', sendForgotPassword),
  takeLatest('@user/SAVE', save),
]);
