/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';

import PageFullscreen from '~/components/PageFullscreen';
import { Header, Body, Form, Input } from './styles';

export default function NewUser({ ...res }) {
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
      <Header>
        <div className="actions">
          <button type="button" onClick={() => setOpen(false)}>
            x
          </button>
          <h2>Cadastrode usuários</h2>
        </div>
        <button type="button">salvar</button>
      </Header>

      <Form>
        <Body>
          <div>
            <h3>Dados pessoais</h3>
            <Input name="firstname" label="Nome" />
            <Input name="lastname" label="Sobrenome" />
            <Input name="email" label="E-mail" />
            <Input name="cpf" label="CPF" />
            <Input name="rg" label="RG" />
            <Input name="phone" label="Celular" />
          </div>
          <div>
            <h3>Endereço</h3>
            <Input name="zipcode" label="CEP" />
            <Input name="street" label="Logradouro" />
            <Input name="street_number" label="Número" />
            <Input name="neighborhood" label="Bairro" />
            <Input name="city" label="Cidade" />
            <Input name="state" label="Estado" />
          </div>
        </Body>
      </Form>
    </PageFullscreen>
  );
}

NewUser.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
