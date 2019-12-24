import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import history from '~/services/history';
import { resetPasswordRequest } from '~/store/modules/auth/actions';

import { Form } from './styles';

const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas devem corresponder'
  ),
});

export default function ResetPassword() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const tokenValid = token.length < 32;

  if (!token && tokenValid) {
    history.push('/');
  }

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ password, confirmPassword }) {
    dispatch(resetPasswordRequest(token, password, confirmPassword));
  }

  return (
    <>
      <img src={logo} alt="Edaily" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="password"
          type="password"
          placeholder="Entre com a senha"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          {loading ? 'Recuperando..' : 'Recuperar minha senha'}
        </button>
      </Form>
    </>
  );
}
