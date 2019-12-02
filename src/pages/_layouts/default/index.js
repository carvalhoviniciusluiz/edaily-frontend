import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Header from '~/components/Header';
import { client } from '~/routes/paths';

import AsideContent from './AsideContent';

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
              to={client.submit}
              className={applyActiveIf(
                client.submit,
                client.follow,
                client.review,
                client.users
              )}
            >
              Cliente
            </Link>
          </li>
          <li>
            <a href="#/#">Revisão</a>
          </li>
          <li>
            <a href="#/#">Financeiro</a>
          </li>
          <li>
            <a href="#/#">Diagramação</a>
          </li>
          <li>
            <a href="#/#">Acervo</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="#/#">Portal</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="#/#">Configurações</a>
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
