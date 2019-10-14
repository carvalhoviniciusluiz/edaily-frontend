import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Identicon from 'react-identicons';

import { MdArrowBack } from 'react-icons/md';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const [isAccompaniment, setIsAccompaniment] = useState(true);

  useEffect(() => {
    setIsAccompaniment(window.location.pathname === '/accompaniment');
  }, [window.location.pathname]);  // eslint-disable-line

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Edaily" />

          {!isAccompaniment && (
            <Link to="/accompaniment">
              <MdArrowBack size={14} />
              Voltar
            </Link>
          )}
        </nav>

        <aside>
          <Notifications />

          <Profile to="/profile">
            <div>
              <strong>
                {profile.firstname} {profile.lastname}
              </strong>
              <span>{profile.email}</span>
            </div>

            {profile.avatar ? (
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
