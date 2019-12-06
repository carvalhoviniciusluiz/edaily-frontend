import React from 'react';

// import ToolbarMenu from '~/components/ToolbarMenu/Reviewer';

import { Container, Content, BoxMenu, BoxContent } from './styles';

export default function Reviwer() {
  return (
    <Container>
      {/* <ToolbarMenu /> */}

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
          <h1>Content</h1>
        </BoxContent>
      </Content>
    </Container>
  );
}
