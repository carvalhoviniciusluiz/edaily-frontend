import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { fetchSuccess, success, failure } from './actions';

export function* request({ payload }) {
  try {
    const { perPage, page, profile } = payload;

    const response = yield call(api.post, '/', {
      query: `
        query (
          $organization: OrganizationFieldsInput!,
          $page: Int,
          $perPage: Int
        ) {
          users:getAllUsers (
            organization: $organization,
            page: $page,
            perPage: $perPage
          ) {
            total
            perPage
            page
            lastPage
            data {
              uuid
              firstname
              lastname
              email
              cpf
              rg
              phone
              zipcode
              street
              street_number
              neighborhood
              city
              state
              is_responsible
              is_active
              confirmed_at
              sign_in_count
              last_sign_in_at
              current_sign_in_at
              last_sign_in_ip_address
              current_sign_in_ip_address
              avatar {
                avatar
              }
            }
          }
        }
      `,
      variables: {
        organization: {
          uuid: profile.organization.uuid,
        },
        perPage,
        page,
      },
    });

    const {
      data: {
        users: { data, ...meta },
      },
    } = response.data;

    yield put(success({ data, meta }));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export function* fetch({ payload }) {
  try {
    const { profile, uuid } = payload;

    const response = yield call(api.post, '/', {
      query: `
        query (
          $organization: OrganizationFieldsInput!,
          $user: UserFieldsInput!
        ) {
          user:getUser (
            organization: $organization,
            user: $user
          ) {
            uuid
            firstname
            lastname
            email
            cpf
            rg
            phone
            zipcode
            street
            street_number
            neighborhood
            city
            state
            is_responsible
            is_active
            confirmed_at
            sign_in_count
            last_sign_in_at
            current_sign_in_at
            last_sign_in_ip_address
            current_sign_in_ip_address
            avatar {
              avatar
            }
          }
        }
      `,
      variables: {
        organization: {
          uuid: profile.organization.uuid,
        },
        user: {
          uuid,
        },
      },
    });

    const { data } = response.data;

    yield put(fetchSuccess(data.user));
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
    const { user, profile } = payload;

    yield call(api.post, '/', {
      query: `
        mutation (
          $organization: OrganizationFieldsInput!,
          $user: UserInput!
        ) {
          user:addUser (
            organization: $organization,
            user: $user
          )
        }
      `,
      variables: {
        organization: {
          uuid: profile.organization.uuid,
        },
        user,
      },
    });

    toast.success('Cadastro finalizado com sucesso.');
  } catch (error) {
    if (error.response.status === 422) {
      toast.warn(
        'Verifique os seus dados pôs percebemos que algumas informações já ' +
          'estão cadastradas.',
        {
          autoClose: false,
        }
      );
    } else {
      toast.error('Falha na recuperação dos dados, verifique sua conexão.');
    }
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
