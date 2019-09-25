import React from 'react';
import { Link } from 'react-router-dom';

import {
  MdChevronLeft,
  MdChevronRight,
  MdAccessTime,
  MdSupervisorAccount,
  MdPermIdentity,
} from 'react-icons/md';
import ToolbarMenu from '~/components/ToolbarMenu';

import { Container, Panel } from './styles';

export default function Dashboard() {
  return (
    <>
      <ToolbarMenu />

      <Container>
        <header>
          <button type="button">
            <MdChevronLeft size={36} color="#fff" />
          </button>
          <strong>24 de setembro de 2019</strong>
          <button type="button">
            <MdChevronRight size={36} color="#fff" />
          </button>
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
            <p>
              <strong>765498/2019</strong>
              <Link to="/">
                No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                dezembro de 2018, veio a esta camara Arbitral denominado
                SISBACOMBRA - Sistema Brasileiro
              </Link>
            </p>
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
            <p>
              <strong>765498/2019</strong>
              <Link to="/">
                No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                dezembro de 2018, veio a esta camara Arbitral denominado
                SISBACOMBRA - Sistema Brasileiro
              </Link>
            </p>
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
            <p>
              <strong>765498/2019</strong>
              <Link to="/">
                No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                dezembro de 2018, veio a esta camara Arbitral denominado
                SISBACOMBRA - Sistema Brasileiro
              </Link>
            </p>
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
            <p>
              <strong>765498/2019</strong>
              <Link to="/">
                No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                dezembro de 2018, veio a esta camara Arbitral denominado
                SISBACOMBRA - Sistema Brasileiro
              </Link>
            </p>
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
            <p>
              <strong>765498/2019</strong>
              <Link to="/">
                No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                dezembro de 2018, veio a esta camara Arbitral denominado
                SISBACOMBRA - Sistema Brasileiro
              </Link>
            </p>
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
            <p>
              <strong>765498/2019</strong>
              <Link to="/">
                No dia 13 de dezembro de 2018, veio a esta camara Arbitral
                denominado SISBACOMBRA - Sistema Brasileiro No dia 13 de
                dezembro de 2018, veio a esta camara Arbitral denominado
                SISBACOMBRA - Sistema Brasileiro
              </Link>
            </p>
          </Panel>
        </ul>
      </Container>
    </>
  );
}
