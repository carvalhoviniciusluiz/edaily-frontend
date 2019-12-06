import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RouteCustom from '~/routes/Route';

import SignInAuth from '~/pages/Auth/SignIn';
import SignUpAuth from '~/pages/Auth/SignUp';
import ForgotPasswordAuth from '~/pages/Auth/ForgotPassword';
import ResetPasswordAuth from '~/pages/Auth/ResetPassword';

import DashboardRegistration from '~/pages/Registration/Dashboard';
import PrivateCompany from '~/pages/Registration/PrivateCompany';
import GovernmentEntity from '~/pages/Registration/GovernmentEntity';

import Profile from '~/pages/Profile';

import FollowerClient from '~/pages/Client/Follower';
import ReviewerClient from '~/pages/Client/Reviewer';
import SubmitClient from '~/pages/Client/Submit';
import UserClient from '~/pages/Client/User';

import Reviewer from '~/pages/Reviewer';
import Search from '~/pages/Search';

import * as paths from './paths';

export default function Routes() {
  return (
    <Switch>
      <RouteCustom path="/" exact component={SignInAuth} />
      <RouteCustom path={paths.auth.signup} component={SignUpAuth} />
      <RouteCustom path={paths.auth.recover} component={ForgotPasswordAuth} />
      <RouteCustom path={paths.auth.reset} component={ResetPasswordAuth} />

      <RouteCustom
        path={paths.registration.register}
        exact
        component={DashboardRegistration}
      />
      <RouteCustom
        path={paths.registration.personal}
        exact
        component={SignUpAuth}
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

      <RouteCustom
        path={paths.reviewer.review}
        component={Reviewer}
        isPrivate
      />

      <RouteCustom path={paths.search} component={Search} isPrivate />

      <RouteCustom
        path={paths.client.follow}
        component={FollowerClient}
        isPrivate
      />
      <RouteCustom
        path={paths.client.review}
        component={ReviewerClient}
        isPrivate
      />
      <RouteCustom
        path={paths.client.submit}
        component={SubmitClient}
        isPrivate
      />
      <RouteCustom path={paths.client.users} component={UserClient} isPrivate />
      <RouteCustom path={paths.profile} component={Profile} isPrivate />

      <RouteCustom path="*" component={SignInAuth} />
    </Switch>
  );
}
