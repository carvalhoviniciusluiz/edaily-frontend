import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import organization from './organization/reducer';
import documentreview from './document/reviewer/reducer';
import documentfollow from './document/following/reducer';

export default combineReducers({
  auth,
  user,
  organization,
  documentreview,
  documentfollow,
});
