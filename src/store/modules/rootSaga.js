import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import document from './client/document/sagas';
import clientUser from './client/user/sagas';
import organization from './organization/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, user, organization, document, clientUser]);
}
