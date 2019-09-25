import React from 'react';

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
        <div>
          <MdInbox color="#fff" size={20} />
          <span>Enviar</span>
        </div>
        <div>
          <MdSend color="#fff" size={20} />
          <span>Acompanhar</span>
        </div>
        <div>
          <MdNoEncryption color="#fff" size={20} />
          <span>Autorizar</span>
        </div>
        <div>
          <MdInsertDriveFile color="#fff" size={20} />
          <span>Rascunhos</span>
        </div>
        <div>
          <MdSupervisorAccount color="#fff" size={20} />
          <span>Usuários</span>
        </div>
      </div>
    </Container>
  );
}
