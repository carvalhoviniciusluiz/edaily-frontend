import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { MdMenu } from 'react-icons/md';
import Header from '~/components/Header';

import { Wrapper, Container } from './styles';

export default function DefaultLayout({ children }) {
  const [checked, setChecked] = useState(true);

  const applyActiveIf = (...paths) => {
    return paths.includes(window.location.pathname) ? 'active' : '';
  };

  const handleInputChange = e => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setChecked(value);
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <input type="checkbox" checked={checked} onChange={handleInputChange} />
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
                '/review',
                '/users'
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
