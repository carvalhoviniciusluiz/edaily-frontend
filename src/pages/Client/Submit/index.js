import React from 'react';

// import InputMask from 'react-input-mask';

import ToolbarMenu from '~/components/ToolbarMenu';
import FileUpload from './FileUpload';

import { Container, Form } from './styles';

export default function SubmitMaterial() {
  return (
    <>
      <ToolbarMenu />

      <Container>
        <header>
          <strong>Formulário de envio de matéria</strong>
        </header>

        <Form>
          <header>
            <strong>Arquivos para encaminhamento</strong>
          </header>

          <hr />

          <FileUpload />

          <button type="submit">Encaminhar para revisão</button>
        </Form>
      </Container>
    </>
  );
}
