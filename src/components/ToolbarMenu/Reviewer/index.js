import React from 'react';
import { Link } from 'react-router-dom';

import { MdSubject, MdSearch } from 'react-icons/md';

import { Container } from './styles';
import { reviewer } from '~/routes/paths';

export default function ToolbarMenu() {
  return (
    <Container>
      <div className="center">
        <Link
          to={reviewer.review}
          className={
            window.location.pathname === reviewer.review ? 'active' : ''
          }
        >
          <MdSubject color="#fff" size={20} />
          <span>Revisão</span>
        </Link>
        <Link
          to="/consulta"
          className={window.location.pathname === '/consulta' ? 'active' : ''}
        >
          <MdSearch color="#fff" size={20} />
          <span>Consulta</span>
        </Link>
      </div>
    </Container>
  );
}
