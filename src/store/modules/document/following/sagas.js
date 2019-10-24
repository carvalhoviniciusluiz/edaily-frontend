import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { documentFollowSuccess, documentFollowFailure } from './actions';

export function* documentFollowResquest({ payload }) {
  try {
    const { limit = 10, page = 1 } = payload;
    const response = yield call(
      api.get,
      `documents/following?limit=${limit}&page=${page}`
    );
    const { data: documents, ...meta } = response.data;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const data = documents.map(({ forwardedAt, ...rest }) => {
      const datetime = utcToZonedTime(forwardedAt, timezone);
      return {
        ...rest,
        date: format(datetime, "dd/MM/yyyy", { locale: pt }), // eslint-disable-line
        time: format(datetime, "HH:mm", { locale: pt }), // eslint-disable-line
        forwardedAt: utcToZonedTime(forwardedAt, timezone),
      };
    });

    yield put(documentFollowSuccess(data, meta));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFollowFailure());
  }
}

export default all([
  takeLatest('@document/DOCUMENT_FOLLOW_REQUEST', documentFollowResquest),
]);
