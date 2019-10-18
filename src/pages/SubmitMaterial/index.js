import React, { useState } from 'react';

import InputMask from 'react-input-mask';

import ToolbarMenu from '~/components/ToolbarMenu';
import FileUpload from './FileUpload';

import { Container, Form } from './styles';

export default function SubmitMaterial() {
  const [publicationDate, setPublicationDate] = useState(false);

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

          <label htmlFor="publication-date">
            <div>
              <input
                id="publication-date"
                name="publication-date"
                type="checkbox"
                onChange={() => setPublicationDate(!publicationDate)}
                checked={publicationDate}
              />
              <span>definir data da publicação</span>
            </div>

            {publicationDate && (
              <InputMask
                name="publication-date"
                mask="99/99/9999"
                placeholder="__/__/____"
              />
            )}
          </label>

          <hr />

          <FileUpload />

          <button type="submit">Encaminhar para analise</button>
        </Form>
      </Container>
    </>
  );
}
