/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Input, Select } from '@rocketseat/unform';

import ToolbarMenu from '~/components/ToolbarMenu';

import FileUpload from './FileUpload';

import { Container, Form, Group } from './styles';

export default function Dashboard() {
  const options = [
    { id: '1', title: 'ADJUDICAÇÃO' },
    { id: '2', title: 'ATA' },
    { id: '3', title: 'ATA DE REGISTRO DE PREÇO' },
    { id: '4', title: 'COMUNICADO' },
    { id: '5', title: 'DECRETO' },
    { id: '6', title: 'EDITAL' },
    { id: '7', title: 'ERRATA' },
    { id: '8', title: 'EXTRATO' },
    { id: '9', title: 'EXTRATO DE CONTRATO' },
    { id: '10', title: 'LICENÇA' },
    { id: '11', title: 'RESULTADO DE LICENÇA' },
    { id: '12', title: 'PORTARIA' },
    { id: '13', title: 'RESOLUÇÃO' },
    { id: '14', title: 'RETIFICAÇÃO' },
  ];

  return (
    <>
      <ToolbarMenu />

      <Container>
        <header>
          <strong>Formulário de envio de matéria</strong>
        </header>

        <Form>
          <header>
            <strong>Dados da publicação</strong>
          </header>

          <hr />

          <Group>
            <div className="type">
              <Select
                name="publication"
                options={options}
                label="Tipo de publicação"
              />
            </div>
            <div className="title">
              <Input name="firstname" label="Título da publicação" />
            </div>
          </Group>

          <hr />

          <header>
            <strong>Anexo de matérias</strong>
          </header>

          <FileUpload />

          <hr />

          <button type="submit">Confirmar envio</button>
        </Form>
      </Container>
    </>
  );
}
