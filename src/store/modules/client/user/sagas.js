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

export default all([
  takeLatest('@user/REQUEST', request),
  takeLatest('@user/FETCH', fetch),
]);
