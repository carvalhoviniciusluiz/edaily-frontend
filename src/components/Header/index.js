import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Identicon from 'react-identicons';

import { MdArrowBack } from 'react-icons/md';

import Notifications from '~/components/Notifications';
import * as paths from '~/routes/paths';

import logo from '~/assets/logo2.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const [isFollower, setIsFollower] = useState(true);

  useEffect(() => {
    setIsFollower(window.location.pathname === paths.client.follow);
  }, [window.location.pathname]);  // eslint-disable-line

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Edaily" />

          {!isFollower && (
            <Link to={paths.client.follow}>
              <MdArrowBack size={14} />
              Voltar
            </Link>
          )}
        </nav>

        <aside>
          <Notifications />

          <Profile to={paths.profile}>
            <div>
              <strong>
                {profile.firstname} {profile.lastname}
              </strong>
              <span>{profile.email}</span>
            </div>

            {profile.avatar.avatar ? (
              <img src={profile.avatar.avatar} alt="Avatar" />
            ) : (
              <Identicon
                string={`${profile.firstname} ${profile.lastname}`}
                size={32}
                bg="#fff"
                fg="#333"
              />
            )}
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
