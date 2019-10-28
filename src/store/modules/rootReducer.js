import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import organization from './organization/reducer';
import review from './client/reviewer/reducer';
import follow from './client/follower/reducer';

export default combineReducers({
  auth,
  user,
  organization,
  review,
  follow,
});
