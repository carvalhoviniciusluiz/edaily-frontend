import { takeLatest, all } from 'redux-saga/effects';

export function* createOrganization({ payload }) {
  console.log(payload.data);
}

export default all([
  takeLatest('@organization/CREATE_ORGANIZATION_REQUEST', createOrganization),
]);
