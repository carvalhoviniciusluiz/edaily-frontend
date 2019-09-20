import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  createOrganizationSuccess,
  createOrganizationFailure,
} from './actions';

export function* createOrganization({ payload }) {
  try {
    const { company, responsible } = payload.data;

    const response = yield call(api.post, 'organizations', {
      company: { definition: 'company', ...company },
      responsible,
    });

    toast.success('Dados foram processados com sucesso.');

    yield put(createOrganizationSuccess(response.data));
  } catch (error) {
    toast.error('Error ao processar os dados, confira as informações.');

    yield put(createOrganizationFailure());
  }
}

export default all([
  takeLatest('@organization/CREATE_ORGANIZATION_REQUEST', createOrganization),
]);
