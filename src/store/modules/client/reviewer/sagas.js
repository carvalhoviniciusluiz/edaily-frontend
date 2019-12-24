import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { documentSuccess, documentFailure } from './actions';

export function* documentResquest({ payload }) {
  try {
    const { limit = 10, page = 1 } = payload;
    const response = yield call(
      api.get,
      `documents?limit=${limit}&page=${page}`
    );
    const { data: documents, ...meta } = response.data;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const data = documents.map(({ createdAt, ...rest }) => {
      const datetime = utcToZonedTime(createdAt, timezone);
      return {
        ...rest,
        date: format(datetime, "dd/MM/yyyy", { locale: pt }), // eslint-disable-line
        time: format(datetime, "HH:mm", { locale: pt }), // eslint-disable-line
        createdAt: utcToZonedTime(createdAt, timezone),
      };
    });

    yield put(documentSuccess(data, meta));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFailure());
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `files/${id}`);
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFailure());
  }
}

export function* forward({ payload }) {
  try {
    const { id } = payload;
    yield call(api.put, `documents/${id}/forward`);
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFailure());
  }
}

export default all([
  takeLatest('@document/DOCUMENT_REQUEST', documentResquest),
  takeLatest('@document/DOCUMENT_DESTROY', destroy),
  takeLatest('@document/DOCUMENT_FORWARD', forward),
]);
