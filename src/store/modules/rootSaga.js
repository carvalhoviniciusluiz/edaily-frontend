import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import organization from './organization/sagas';
import review from './client/reviewer/sagas';
import follow from './client/follower/sagas';

export default function* rootSaga() {
  return yield all([auth, user, organization, review, follow]);
}
