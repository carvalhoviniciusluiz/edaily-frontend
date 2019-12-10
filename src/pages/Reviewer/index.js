import React, { useState } from 'react';

// import ToolbarMenu from '~/components/ToolbarMenu/Reviewer';

import {
  Container,
  Content,
  BoxMenu,
  BoxContent,
  InputItem,
  Documentthumbnail,
} from './styles';

import DocumentReview from './DocumentReview';

export default function Reviwer() {
  const [open, setOpen] = useState(true);

  return (
    <Container>
      {/* <ToolbarMenu /> */}

      <DocumentReview open={open} setOpen={setOpen} />

      <Content>
        <BoxMenu>
          <ul>
            <li className="reviewed">
              <div>
                <strong> PALÁCIO </strong>
                <span>30 Documentos</span>
              </div>

              <div className="reviewed-numbers">
                <span>
                  Revisados
                  <small>20</small>
                </span>
                <span>
                  Pendentes
                  <small>10</small>
                </span>
              </div>
            </li>
            <li className="reviewed">
              <div>
                <strong> SEAD </strong>
                <span>50 Documentos</span>
              </div>

              <div className="reviewed-numbers">
                <span>
                  Revisados
                  <small>35</small>
                </span>
                <span>
                  Pendentes
                  <small>15</small>
                </span>
              </div>
            </li>
            <li className="active">
              <div>
                <strong> SEED </strong>
                <span>100 Documentos</span>
              </div>
            </li>
            <li>
              <div>
                <strong> UEAP </strong>
                <span>3 Documentos</span>
              </div>
            </li>
            <li>
              <div>
                <strong> SEINF </strong>
                <span>1 Documento</span>
              </div>
            </li>
            <li>
              <div>
                <strong> DIAFRO </strong>
                <span>3 Documento</span>
              </div>
            </li>
            <li>
              <div>
                <strong> MPAP </strong>
                <span>1 Documento</span>
              </div>
            </li>
            <li>
              <div>
                <strong> CBMAP </strong>
                <span>1 Documento</span>
              </div>
            </li>
            <li>
              <div>
                <strong> PMAP </strong>
                <span>1 Documento</span>
              </div>
            </li>
            <li>
              <div>
                <strong> DETRAN </strong>
                <span>9 Documentos</span>
              </div>
            </li>
            <li>
              <div>
                <strong> SEFAZ </strong>
                <span>2 Documentos</span>
              </div>
            </li>
            <li className="none">
              <div>
                <strong> PRODAP </strong>
                <span>0 Documentos</span>
              </div>
            </li>
            <li className="none">
              <div>
                <strong> SECULT </strong>
                <span>0 Documentos</span>
              </div>
            </li>
            <li className="none">
              <div>
                <strong> PROCON </strong>
                <span>0 Documentos</span>
              </div>
            </li>
            <li className="none">
              <div>
                <strong> SESA </strong>
                <span>0 Documentos</span>
              </div>
            </li>
          </ul>
        </BoxMenu>

        <BoxContent>
          <header>
            <strong>Secretaria de Educação do Estado - </strong>
            <span>SEED</span>
          </header>

          <InputItem className="custom-field">
            <input type="text" />

            <div className="actions">
              <button type="button">Avançado</button>
            </div>
          </InputItem>

          <ul>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:17</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
            <Documentthumbnail
              onClick={() => setOpen(true)}
              role="presentation"
            >
              <img
                src="https://assets.documentcloud.org/documents/6426979/pages/U-S-Secret-Service-Record-UIC-Anti-Trump-Rally-p1-thumbnail.gif"
                alt=""
              />
              <div>
                <h2>U.S. Secret Service Record - UIC Anti-Trump Rally...</h2>
                <span>17:00</span>
              </div>
            </Documentthumbnail>
          </ul>

          <div className="footer">
            <div>1 – 10 de 513 Documentos</div>
            <div>Página 1 de 52 →</div>
          </div>
        </BoxContent>
      </Content>
    </Container>
  );
}
