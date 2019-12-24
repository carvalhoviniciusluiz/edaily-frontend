import React from 'react';
import {
  MdInbox,
  MdSend,
  MdInsertDriveFile,
  MdSupervisorAccount,
  MdSearch,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { client } from '~/routes/paths';

import { Container } from './styles';

export default function ToolbarMenu() {
  return (
    <Container>
      <div className="center">
        <Link
          to={client.submit}
          className={window.location.pathname === client.submit ? 'active' : ''}
        >
          <MdInbox color="#fff" size={20} />
          <span>Encaminhar</span>
        </Link>
        <Link
          to={client.follow}
          className={window.location.pathname === client.follow ? 'active' : ''}
        >
          <MdSend color="#fff" size={20} />
          <span>Acompanhar</span>
        </Link>
        <Link
          to={client.review}
          className={window.location.pathname === client.review ? 'active' : ''}
        >
          <MdInsertDriveFile color="#fff" size={20} />
          <span>Analise</span>
        </Link>
        <Link
          to={client.users}
          className={window.location.pathname === client.users ? 'active' : ''}
        >
          <MdSupervisorAccount color="#fff" size={20} />
          <span>Usuários</span>
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
