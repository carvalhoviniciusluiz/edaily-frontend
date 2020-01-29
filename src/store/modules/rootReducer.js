import { combineReducers } from 'redux';

import auth from './auth/reducer';
import document from './client/document/reducer';
import clientUser from './client/user/reducer';
import organization from './organization/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  organization,
  document,
  clientUser,
});
