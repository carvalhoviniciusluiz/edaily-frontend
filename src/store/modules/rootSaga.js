import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import organization from './organization/sagas';
import documentprocess from './document/processing/sagas';
import documentfollow from './document/following/sagas';

export default function* rootSaga() {
  return yield all([auth, user, organization, documentprocess, documentfollow]);
}
