import React from 'react';
import { Link } from 'react-router-dom';

import {
  MdInbox,
  MdSend,
  MdNoEncryption,
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
          <span>Enviar</span>
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
        <Link to="/">
          <MdInsertDriveFile color="#fff" size={20} />
          <span>Rascunhos</span>
        </Link>
        <Link to="/">
          <MdNoEncryption color="#fff" size={20} />
          <span>Autorização</span>
        </Link>
        <Link to="/">
          <MdSupervisorAccount color="#fff" size={20} />
          <span>Usuários</span>
        </Link>
      </div>
    </Container>
  );
}
