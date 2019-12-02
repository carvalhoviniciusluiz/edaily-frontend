import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Header from '~/components/Header';
import AsideContent from '~/components/AsideContent';

import { Wrapper } from './styles';

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
      <AsideContent handleInputChange={handleInputChange} checked={checked}>
        <Header />

        <ul>
          <li>
            <Link
              to="/submit"
              className={applyActiveIf(
                '/submit',
                '/follow',
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
      </AsideContent>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
