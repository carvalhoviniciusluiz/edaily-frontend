import React from 'react';
import { Link } from 'react-router-dom';

import {
  MdInbox,
  MdSend,
  MdInsertDriveFile,
  MdSupervisorAccount,
} from 'react-icons/md';

import { Container } from './styles';
import { client } from '~/routes/paths';

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
      </div>
    </Container>
  );
}
