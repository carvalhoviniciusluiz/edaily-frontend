import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_uuid" />

        <Input name="firstname" label="Nome" />
        <Input name="lastname" label="Sobre nome" />
        <Input type="email" name="email" label="Email" />
        <Input name="cpf" label="CPF" />
        <Input name="rg" label="RG" />
        <Input name="phone" label="Celular" />

        <hr />

        <Input name="zipcode" label="CEP" />
        <Input name="street" label="Logradouro" />
        <Input name="street_number" label="Número" />
        <Input name="neighborhood" label="Bairro" />
        <Input name="city" label="Cidade" />
        <Input name="state" label="UF" />

        <hr />

        <Input type="password" name="old_password" label="Senha atual" />

        <Input name="password" type="password" label="Nova senha" />

        <Input
          type="password"
          name="password_confirmation"
          label="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair da App
      </button>
    </Container>
  );
}
