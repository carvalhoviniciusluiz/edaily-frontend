import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { forgotPasswordRequest } from '~/store/modules/auth/actions';

import { Form } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email }) {
    dispatch(forgotPasswordRequest(email));
  }

  return (
    <>
      <img src={logo} alt="Edaily" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="seu e-mail" />
        <button type="submit">
          {loading ? 'Enviando..' : 'Enviar email de recuperação'}
        </button>
        <Link to="/">Voltar ao login</Link>
      </Form>
    </>
  );
}
