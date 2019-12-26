import React from 'react';
import { MdDashboard, MdDonutSmall } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { administration } from '~/routes/paths';

import { Container } from './styles';

export default function ToolbarMenu() {
  return (
    <Container>
      <div className="center">
        <Link
          to={administration.dashboard}
          className={
            window.location.pathname === administration.dashboard
              ? 'active'
              : ''
          }
        >
          <MdDashboard color="#fff" size={20} />
          <span>Painel</span>
        </Link>
        <Link
          to={administration.sections}
          className={
            window.location.pathname === administration.sections ? 'active' : ''
          }
        >
          <MdDonutSmall color="#fff" size={20} />
          <span>Sessões</span>
        </Link>
      </div>
    </Container>
  );
}
