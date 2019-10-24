import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { matterSuccess, matterFailure } from './actions';

export function* resquest({ payload }) {
  try {
    const { limit = 10, page = 1 } = payload;
    const response = yield call(api.get, `matters?limit=${limit}&page=${page}`);
    const { data: matters, ...meta } = response.data;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const data = matters.map(({ createdAt, ...rest }) => {
      const datetime = utcToZonedTime(createdAt, timezone);
      return {
        ...rest,
        date: format(datetime, "dd/MM/yyyy", { locale: pt }), // eslint-disable-line
        time: format(datetime, "HH:mm", { locale: pt }), // eslint-disable-line
        createdAt: utcToZonedTime(createdAt, timezone),
      };
    });

    yield put(matterSuccess(data, meta));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(matterFailure());
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `files/${id}`);
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(matterFailure());
  }
}

export default all([
  takeLatest('@matter/MATTER_REQUEST', resquest),
  takeLatest('@matter/MATTER_DESTROY', destroy),
]);
