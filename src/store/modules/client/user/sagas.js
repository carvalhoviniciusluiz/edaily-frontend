import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { success, failure } from './actions';

export function* request({ payload }) {
  try {
    const {
      organization: { uuid },
    } = payload;

    const response = yield call(
      api.get,
      `organizations/${uuid}/users?page=${payload.page}&limit=${payload.limit}`
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

export default all([takeLatest('@user/REQUEST', request)]);
