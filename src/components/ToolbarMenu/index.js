import React from 'react';
import { Link } from 'react-router-dom';

import {
  MdInbox,
  MdSend,
  MdInsertDriveFile,
  MdSupervisorAccount,
} from 'react-icons/md';

import { Container } from './styles';

export default function ToolbarMenu() {
  return (
    <Container>
      <div className="container center">
        <Link
          to="/submit"
          className={window.location.pathname === '/submit' ? 'active' : ''}
        >
          <MdInbox color="#fff" size={20} />
          <span>Encaminhar</span>
        </Link>
        <Link
          to="/accompaniment"
          className={
            window.location.pathname === '/accompaniment' ? 'active' : ''
          }
        >
          <MdSend color="#fff" size={20} />
          <span>Acompanhar</span>
        </Link>
        <Link
          to="/processing"
          className={window.location.pathname === '/processing' ? 'active' : ''}
        >
          <MdInsertDriveFile color="#fff" size={20} />
          <span>Processando</span>
        </Link>
        <Link to="/">
          <MdSupervisorAccount color="#fff" size={20} />
          <span>Usuários</span>
        </Link>
      </div>
    </Container>
  );
}
