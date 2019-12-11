import React from 'react';

import { MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageFullscreen from '~/components/PageFullscreen';

import { Header, Container, Content, Aside } from './styles';

export default function DocumentReview({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  return (
    <PageFullscreen
      open={open}
      setOpen={setOpen}
      background="#f8f8f8"
      showActions={false}
    >
      <Tabs>
        <Header>
          <TabList>
            <Tab>Documentos</Tab>
            <Tab>Páginas</Tab>
            <Tab>Texto</Tab>
          </TabList>

          <button type="button" onClick={() => setOpen(false)}>
            <MdClose size={22} />
          </button>
        </Header>

        <Container>
          <Aside>
            <header>
              <div className="pagination">
                <button type="button">
                  <MdChevronLeft size={32} />
                </button>

                <div>
                  Página <input type="text" /> de 2
                </div>

                <button type="button">
                  <MdChevronRight size={32} />
                </button>
              </div>

              <div className="header">
                <div>
                  <h2 title="U.S. Secret Service Record - UIC Anti-Trump Rally...">
                    U.S. Secret Service Record - UIC Anti-Trump Rally...
                  </h2>
                </div>

                <div className="spread">
                  <span>Responsável:</span>
                  <span className="link">Vinicius Carvalho</span>
                </div>

                <div className="spread">
                  <span>Emissor:</span>
                  <span>NIO</span>
                </div>

                <div className="spread">
                  <span>Entrada:</span>
                  <span>17:17</span>
                </div>
              </div>

              <div className="actions">
                <ul>
                  <li>Baixar Documento Original (PDF) »</li>
                  <li>Imprimir Documento Original (PDF) »</li>
                  <li>Visualizar Histórico de Envio »</li>
                  <li className="bold">Devolver Documento »</li>
                  <li className="bold">Sustar Documento »</li>
                  <li className="bold">Documento Revisado »</li>
                </ul>
              </div>
            </header>
          </Aside>

          <Content>
            <TabPanel>
              <h2>Documento</h2>
            </TabPanel>

            <TabPanel>
              <h2>Páginas</h2>
            </TabPanel>

            <TabPanel>
              <h2>Texto</h2>
            </TabPanel>
          </Content>
        </Container>
      </Tabs>
    </PageFullscreen>
  );
}
