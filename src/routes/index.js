import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RouteCustom from '~/routes/Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';

import Dashboard from '~/pages/Dashboard';
import PrivateCompany from '~/pages/Registration/PrivateCompany';
import GovernmentEntity from '~/pages/Registration/GovernmentEntity';

import Profile from '~/pages/Profile';

import Follower from '~/pages/Client/Follower';
import Reviewer from '~/pages/Client/Reviewer';
import Submit from '~/pages/Client/Submit';
import User from '~/pages/Client/User';

import * as paths from './paths';

export default function Routes() {
  return (
    <Switch>
      <RouteCustom path="/" exact component={SignIn} />
      <RouteCustom path={paths.auth.signup} component={SignUp} />
      <RouteCustom path={paths.auth.recover} component={ForgotPassword} />
      <RouteCustom path={paths.auth.reset} component={ResetPassword} />

      <RouteCustom
        path={paths.registration.register}
        exact
        component={Dashboard}
      />
      <RouteCustom
        path={paths.registration.organization}
        exact
        component={SignUp}
      />
      <Route
        path={paths.registration.company}
        exact
        component={PrivateCompany}
      />
      <Route
        path={paths.registration.government}
        exact
        component={GovernmentEntity}
      />

      <RouteCustom path={paths.client.follow} component={Follower} isPrivate />
      <RouteCustom path={paths.client.review} component={Reviewer} isPrivate />
      <RouteCustom path={paths.client.submit} component={Submit} isPrivate />
      <RouteCustom path={paths.client.users} component={User} isPrivate />
      <RouteCustom path={paths.client.profile} component={Profile} isPrivate />

      <RouteCustom path="*" component={SignIn} />
    </Switch>
  );
}
