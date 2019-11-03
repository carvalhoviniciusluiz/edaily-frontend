import React from 'react';
import { Link } from 'react-router-dom';

import { MdPeople, MdPerson } from 'react-icons/md';
import { IoMdAnalytics } from 'react-icons/io';

import { Container, Item } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Item>
        <Link to="/register/company">
          <div>
            <MdPeople size={32} />

            <strong>Pessoa Jurídica</strong>
          </div>
          <span>Cadastro de empresas</span>
        </Link>
      </Item>

      <Item>
        <Link to="/register/company">
          <div>
            <MdPerson size={32} />

            <strong>Pessoa Física</strong>
          </div>
          <span>Cadastro cidadão</span>
        </Link>
      </Item>

      <Item>
        <Link to="/register/government">
          <div>
            <IoMdAnalytics size={32} />

            <strong>Entidades Governamentais</strong>
          </div>
          <span>Cadastro de orgãos do governo e afins</span>
        </Link>
      </Item>
    </Container>
  );
}
