import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { success, failure } from './actions';

export function* request({ payload }) {
  try {
    const { limit, page, organizationId, userId } = payload;

    const response = yield call(
      api.get,
      `organizations/${organizationId}/users/${userId}/documents?page=${page}&limit=${limit}`
    );
    const { data: documents, ...meta } = response.data;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const data = documents.map(({ updatedAt, ...rest }) => {
      const datetime = utcToZonedTime(updatedAt, timezone);
      return {
        ...rest,
        date: format(datetime, "dd/MM/yyyy", { locale: pt }), // eslint-disable-line
        time: format(datetime, "HH:mm", { locale: pt }), // eslint-disable-line
        updatedAt: utcToZonedTime(updatedAt, timezone),
      };
    });

    yield put(success({ data, meta }));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export default all([takeLatest('@document/REQUEST', request)]);
