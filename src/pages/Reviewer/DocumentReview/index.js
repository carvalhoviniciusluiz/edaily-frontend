import React, { useState } from 'react';

import { MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import PageFullscreen from '~/components/PageFullscreen';

import AsideNavegation from './AsideNavegation';
import TextPage from './TextPage';

import { Header, Container, Content, AsideContent } from './styles';

export default function DocumentReview({ ...res }) {
  const [checked, setChecked] = useState(true);
  const { open, setOpen } = res;

  const handleInputChange = () => {
    setChecked(!checked);
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <AsideNavegation checked={checked} handleInputChange={handleInputChange}>
        <AsideContent>
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
              <h2 title="U.S. Secret Service Record - UIC Anti-Trump Rally...">
                U.S. Secret Service Record - UIC Anti-Trump Rally...
              </h2>

              <div className="spread">
                <span>Responsável:</span>
                <span>Vinicius Carvalho</span>
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
                <li className="bold">Aceitar Documento »</li>
                <li className="bold">Recusar Documento »</li>
              </ul>
            </div>
          </header>
        </AsideContent>
      </AsideNavegation>

      <PageFullscreen
        open={open}
        setOpen={setOpen}
        background="#f8f8f8"
        showActions={false}
        subtract="300px"
      >
        <Tabs defaultIndex={2}>
          <Header>
            <TabList>
              <Tab>Documentos</Tab>
              <Tab>Texto</Tab>
            </TabList>

            <button type="button" onClick={() => setOpen(false)}>
              <MdClose size={22} />
            </button>
          </Header>

          <Container>
            <Content>
              <TabPanel>
                <h2>Documentos</h2>
              </TabPanel>

              <TabPanel>
                <TextPage />
              </TabPanel>
            </Content>
          </Container>
        </Tabs>
      </PageFullscreen>
    </>
  );
}
