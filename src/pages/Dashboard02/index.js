import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdPeople, IoMdAnalytics } from 'react-icons/io';

import { ServiceList } from './styles';

export default function PublicForms() {
  return (
    <div className="main-container">
      <ServiceList>
        <li>
          <Link to="/register/government">
            <IoMdPeople size={32} />

            <strong>Entidade Governamental</strong>
            <span>Cadastro de orgãos do governo e afins</span>
          </Link>
        </li>

        <li>
          <Link to="/register/company">
            <IoMdAnalytics size={32} />

            <strong>Empresa Privada</strong>
            <span>Cadastro de pessoa jurídica</span>
          </Link>
        </li>
      </ServiceList>
    </div>
  );
}
