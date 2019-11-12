/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { MdClose } from 'react-icons/md';

import PageFullscreen from '~/components/PageFullscreen';
import { Header, Body, Form, Input } from './styles';

export default function NewUser({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  const schema = Yup.object().shape({
    firstname: Yup.string().required('O nome é obrigatório'),
    lastname: Yup.string().required('O ultimo nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido.')
      .required('O e-mail é obrigatório'),
    cpf: Yup.string().required('O CPF é obrigatório'),
    rg: Yup.string().required('O RG é obrigatório'),
    phone: Yup.string().required('O celular é obrigatório'),
    zipcode: Yup.string().required('O CEP é obrigatório'),
    street: Yup.string().required('O logradouro é obrigatório'),
    street_number: Yup.string().required('O número é obrigatório'),
    neighborhood: Yup.string().required('O bairro é obrigatório'),
    city: Yup.string().required('A cidade é obrigatório'),
    state: Yup.string().required('O estado é obrigatório'),
  });

  return (
    <PageFullscreen
      open={open}
      setOpen={setOpen}
      background="#f8f8f8"
      showActions={false}
    >
      <Header>
        <h2>Cadastro de usuário</h2>
        <button type="button" onClick={() => setOpen(false)}>
          <MdClose size={22} />
        </button>
      </Header>

      <Form schema={schema}>
        <Body>
          <div>
            <h3>Dados pessoais</h3>
            <div className="fields">
              <Input name="firstname" label="Nome" />
            </div>
            <div className="fields">
              <Input name="lastname" label="Sobrenome" />
            </div>
            <div className="fields">
              <Input name="email" label="E-mail" />
            </div>
            <div className="fields">
              <Input name="cpf" label="CPF" />
            </div>
            <div className="fields">
              <Input name="rg" label="RG" />
            </div>
            <div className="fields">
              <Input name="phone" label="Celular" />
            </div>
          </div>
          <div>
            <h3>Endereço</h3>
            <div className="fields">
              <Input name="zipcode" label="CEP" />
            </div>
            <div className="fields">
              <Input name="street" label="Logradouro" />
            </div>
            <div className="fields">
              <Input name="street_number" label="Número" />
            </div>
            <div className="fields">
              <Input name="neighborhood" label="Bairro" />
            </div>
            <div className="fields">
              <Input name="city" label="Cidade" />
            </div>
            <div className="fields">
              <Input name="state" label="Estado" />
            </div>
          </div>
        </Body>

        <button type="submit">Criar conta</button>
      </Form>
    </PageFullscreen>
  );
}

NewUser.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
