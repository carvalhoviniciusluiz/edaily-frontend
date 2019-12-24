import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { auth, registration } from '~/routes/paths';
import { signInRequest } from '~/store/modules/auth/actions';

import { Form } from './styles';

const schema = Yup.object().shape({
  credential: Yup.string().required('A credencial é obrigatória'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ credential, password }) {
    dispatch(signInRequest(credential, password));
  }

  return (
    <>
      <img src={logo} alt="Edaily" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="credential" placeholder="Informe seu CPF / E-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando..' : 'Acessar'}</button>
        <Link to={auth.recover}>Quero recuperar minha senha</Link>
        <Link to={registration.register}>Criar conta do governo</Link>

        <hr />

        <Link to={registration.register}>
          <strong>Fazer envio avulso</strong>
        </Link>
      </Form>
    </>
  );
}
