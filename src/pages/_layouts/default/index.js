import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { MdMenu } from 'react-icons/md';
import Header from '~/components/Header';

import { Wrapper, Container } from './styles';

export default function DefaultLayout({ children }) {
  const applyActiveIf = (...paths) => {
    return paths.includes(window.location.pathname) ? 'active' : '';
  };

  return (
    <Wrapper>
      <Container>
        <Header />

        <input type="checkbox" />
        <span className="hamburger">
          <MdMenu size={33} color="#fff" />
        </span>

        <ul>
          <li>
            <Link
              to="/submit"
              className={applyActiveIf(
                '/submit',
                '/accompaniment',
                '/processing'
              )}
            >
              Cliente
            </Link>
          </li>
          <li>
            <a href="#revision">Revisão</a>
          </li>
          <li>
            <a href="#financial">Financeiro</a>
          </li>
          <li>
            <a href="#diagramming">Diagramação</a>
          </li>
          <li>
            <a href="#collection">Acervo</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="#site">Portal</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="#configuration">Configurações</a>
          </li>
        </ul>

        {children}
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
