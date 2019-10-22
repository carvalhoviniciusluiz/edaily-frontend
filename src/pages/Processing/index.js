import React from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import {
  MdAccessTime,
  MdSupervisorAccount,
  MdPermIdentity,
} from 'react-icons/md';
import ToolbarMenu from '~/components/ToolbarMenu';

import { Container, Panel } from './styles';

export default function Dashboard() {
  const handleDelete = async id => {
    const { value } = await Swal.fire({
      type: 'question',
      title: 'Você tem certeza',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      heightAuto: false,
    });

    if (value) {
      console.tron.log(id);
    }
  };

  return (
    <>
      <ToolbarMenu />

      <Container>
        <header>
          <strong>Aguardando liberação</strong>
        </header>

        <ul>
          <Panel>
            <div>
              <strong className="time">19:23</strong>
              <strong>
                <MdSupervisorAccount size={22} />
                <span>PRODAP</span>
              </strong>
              <strong>
                <MdPermIdentity size={22} />
                <span>Jorge</span>
              </strong>
              <strong>
                <MdAccessTime />
                <span>24/07/2019</span>
              </strong>
            </div>
            <div>
              <p>
                <Link to="/">
                  No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                  denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                  dezembro de 2018, veio a esta camara Arbitral denominado
                  SISBACOMBRA - Sistema Brasileiro
                </Link>
              </p>

              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(123)}
              >
                Excluir
              </button>
              <button type="button" className="send">
                Enviar
              </button>
            </div>
          </Panel>

          <Panel>
            <div>
              <strong className="time">19:23</strong>
              <strong>
                <MdSupervisorAccount size={22} />
                <span>PRODAP</span>
              </strong>
              <strong>
                <MdPermIdentity size={22} />
                <span>Jorge</span>
              </strong>
              <strong>
                <MdAccessTime />
                <span>24/07/2019</span>
              </strong>
            </div>
            <div>
              <p>
                <Link to="/">
                  No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                  denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                  dezembro de 2018, veio a esta camara Arbitral denominado
                  SISBACOMBRA - Sistema Brasileiro
                </Link>
              </p>

              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(123)}
              >
                Excluir
              </button>
              <button type="button" className="send">
                Enviar
              </button>
            </div>
          </Panel>

          <Panel>
            <div>
              <strong className="time">19:23</strong>
              <strong>
                <MdSupervisorAccount size={22} />
                <span>PRODAP</span>
              </strong>
              <strong>
                <MdPermIdentity size={22} />
                <span>Jorge</span>
              </strong>
              <strong>
                <MdAccessTime />
                <span>24/07/2019</span>
              </strong>
            </div>
            <div>
              <p>
                <Link to="/">
                  No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                  denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                  dezembro de 2018, veio a esta camara Arbitral denominado
                  SISBACOMBRA - Sistema Brasileiro
                </Link>
              </p>

              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(123)}
              >
                Excluir
              </button>
              <button type="button" className="send">
                Enviar
              </button>
            </div>
          </Panel>

          <Panel>
            <div>
              <strong className="time">19:23</strong>
              <strong>
                <MdSupervisorAccount size={22} />
                <span>PRODAP</span>
              </strong>
              <strong>
                <MdPermIdentity size={22} />
                <span>Jorge</span>
              </strong>
              <strong>
                <MdAccessTime />
                <span>24/07/2019</span>
              </strong>
            </div>
            <div>
              <p>
                <Link to="/">
                  No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                  denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                  dezembro de 2018, veio a esta camara Arbitral denominado
                  SISBACOMBRA - Sistema Brasileiro
                </Link>
              </p>

              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(123)}
              >
                Excluir
              </button>
              <button type="button" className="send">
                Enviar
              </button>
            </div>
          </Panel>

          <Panel>
            <div>
              <strong className="time">19:23</strong>
              <strong>
                <MdSupervisorAccount size={22} />
                <span>PRODAP</span>
              </strong>
              <strong>
                <MdPermIdentity size={22} />
                <span>Jorge</span>
              </strong>
              <strong>
                <MdAccessTime />
                <span>24/07/2019</span>
              </strong>
            </div>
            <div>
              <p>
                <Link to="/">
                  No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                  denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                  dezembro de 2018, veio a esta camara Arbitral denominado
                  SISBACOMBRA - Sistema Brasileiro
                </Link>
              </p>

              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(123)}
              >
                Excluir
              </button>
              <button type="button" className="send">
                Enviar
              </button>
            </div>
          </Panel>

          <Panel>
            <div>
              <strong className="time">19:23</strong>
              <strong>
                <MdSupervisorAccount size={22} />
                <span>PRODAP</span>
              </strong>
              <strong>
                <MdPermIdentity size={22} />
                <span>Jorge</span>
              </strong>
              <strong>
                <MdAccessTime />
                <span>24/07/2019</span>
              </strong>
            </div>
            <div>
              <p>
                <Link to="/">
                  No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                  denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                  dezembro de 2018, veio a esta camara Arbitral denominado
                  SISBACOMBRA - Sistema Brasileiro
                </Link>
              </p>

              <button
                type="button"
                className="delete"
                onClick={() => handleDelete(123)}
              >
                Excluir
              </button>
              <button type="button" className="send">
                Enviar
              </button>
            </div>
          </Panel>
        </ul>
      </Container>
    </>
  );
}
