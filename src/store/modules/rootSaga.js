import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import organization from './organization/sagas';
import documentreview from './document/reviewer/sagas';
import documentfollow from './document/follower/sagas';

export default function* rootSaga() {
  return yield all([auth, user, organization, documentreview, documentfollow]);
}
