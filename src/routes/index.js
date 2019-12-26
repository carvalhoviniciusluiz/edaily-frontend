import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardAdmin from '~/pages/Administration/Dashboard';
import DashboardSection from '~/pages/Administration/Section';
import ForgotPasswordAuth from '~/pages/Auth/ForgotPassword';
import ResetPasswordAuth from '~/pages/Auth/ResetPassword';
import SignInAuth from '~/pages/Auth/SignIn';
import SignUpAuth from '~/pages/Auth/SignUp';
import FollowerClient from '~/pages/Client/Follower';
import ReviewerClient from '~/pages/Client/Reviewer';
import SubmitClient from '~/pages/Client/Submit';
import UserClient from '~/pages/Client/User';
import Category from '~/pages/Government/Category';
import Registration from '~/pages/Government/Registration';
import Profile from '~/pages/Profile';
import Reviewer from '~/pages/Reviewer';
import Search from '~/pages/Search';
import RouteCustom from '~/routes/Route';

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
        component={Category}
      />
      <Route
        path={paths.registration.government}
        exact
        component={Registration}
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

      <RouteCustom
        path={paths.administration.dashboard}
        exact
        component={DashboardAdmin}
        isPrivate
      />
      <RouteCustom
        path={paths.administration.sections}
        component={DashboardSection}
        isPrivate
      />

      <RouteCustom path="*" component={SignInAuth} />
    </Switch>
  );
}
