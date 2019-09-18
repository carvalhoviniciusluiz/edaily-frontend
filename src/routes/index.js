import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RouteCustom from '~/routes/Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';

import Dashboard02 from '~/pages/Dashboard02';
import PrivateCompanyRegistration from '~/pages/PrivateCompanyRegistration';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <RouteCustom path="/" exact component={SignIn} />
      <RouteCustom path="/signup" component={SignUp} />
      <RouteCustom path="/recover" component={ForgotPassword} />
      <RouteCustom path="/reset" component={ResetPassword} />

      <RouteCustom path="/register" exact component={Dashboard02} />
      <RouteCustom path="/register/organization" exact component={SignUp} />
      <Route
        path="/register/company"
        exact
        component={PrivateCompanyRegistration}
      />

      <RouteCustom path="/dashboard" component={Dashboard} isPrivate />
      <RouteCustom path="/profile" component={Profile} isPrivate />

      <RouteCustom path="*" component={SignIn} />
    </Switch>
  );
}
