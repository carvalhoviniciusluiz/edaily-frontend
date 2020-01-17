import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import {
  createOrganizationSuccess,
  createOrganizationFailure,
} from './actions';

export function* createOrganization({ payload }) {
  try {
    const {
      organization,
      responsible,
      substitute,
      termsAccepted,
    } = payload.data;

    const data = {
      query: `
        mutation (
          $organization: OrganizationInput!,
          $responsible: UserInput!,
          $substitute: UserInput
        ) {
          hasOrganization: addOrganizationWithResponsibleAndSubstitute (
            organization: $organization,
            responsible: $responsible,
            substitute: $substitute
          )
        }
      `,
      variables: {
        organization: {
          ...organization,
          definition: 'government',
          terms_accepted: termsAccepted,
        },
        responsible,
        substitute,
      },
    };

    const response = yield call(api.post, '/', data);

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
