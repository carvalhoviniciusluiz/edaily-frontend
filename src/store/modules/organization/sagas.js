import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import history from '~/services/history';

import {
  createOrganizationSuccess,
  createOrganizationFailure,
} from './actions';

export function* createOrganization({ payload }) {
  try {
    const {
      company,
      responsible,
      substitute,
      shippingAllowed,
      chargeAllowed,
      termsAccepted,
    } = payload.data;

    const response = yield call(api.post, 'organizations', {
      company: { definition: 'company', ...company },
      responsible,
      substitute,
      sending_authorized_email: !!shippingAllowed,
      billing_authorized_email: !!chargeAllowed,
      authorized_and_accepted_policy_terms: !!termsAccepted,
    });

    toast.success('Dados foram processados com sucesso.');

    yield put(createOrganizationSuccess(response.data));

    history.push('/');
  } catch (error) {
    toast.error('Error ao processar os dados, confira as informações.');

    yield put(createOrganizationFailure());
  }
}

export default all([
  takeLatest('@organization/CREATE_ORGANIZATION_REQUEST', createOrganization),
]);
