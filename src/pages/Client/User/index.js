import React from 'react';
import { useSelector } from 'react-redux';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import ToolbarMenu from '~/components/ToolbarMenu';

import { Container, Button, UserPanel } from './styles';

export default function User() {
  const profile = useSelector(state => state.user.profile);

  return (
    <>
      <ToolbarMenu />

      <Container>
        <header>
          <Button>
            <MdChevronLeft size={36} color="#fff" />
          </Button>
          <div>
            <input type="text" value={1} />
            <strong>/</strong>
            <strong>2</strong>
          </div>
          <Button>
            <MdChevronRight size={36} color="#fff" />
          </Button>
        </header>

        <ul>
          <UserPanel inative className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
          <UserPanel inative={false} className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
          <UserPanel inative={false} className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
          <UserPanel inative className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
          <UserPanel inative={false} className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
          <UserPanel inative className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
          <UserPanel inative={false} className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
          <UserPanel inative className="with-shading">
            <img src={profile.avatar.avatar} alt="Avatar" />

            <a href="#avatar">
              <strong>Vinicius Carvalho</strong>
              <span>785.458.702-72</span>
            </a>
          </UserPanel>
        </ul>
      </Container>
    </>
  );
}
