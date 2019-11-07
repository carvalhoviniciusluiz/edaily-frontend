import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import organization from './organization/sagas';
import document from './client/document/sagas';
import review from './client/reviewer/sagas';
import follow from './client/follower/sagas';
import clientUser from './client/user/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    organization,
    document,
    review,
    follow,
    clientUser,
  ]);
}
