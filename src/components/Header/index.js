import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Identicon from 'react-identicons';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Edaily" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile to="/profile">
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.email}</span>
            </div>

            {profile.avatar ? (
              <img src={profile.avatar.url} alt="Avatar" />
            ) : (
              <Identicon string={profile.name} size={32} bg="#fff" fg="#333" />
            )}
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
