import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import organization from './organization/reducer';
import document from './document/reducer';

export default combineReducers({
  auth,
  user,
  organization,
  document,
});
