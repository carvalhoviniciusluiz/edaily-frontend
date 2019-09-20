import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import organization from './organization/reducer';

export default combineReducers({
  auth,
  user,
  organization,
});
