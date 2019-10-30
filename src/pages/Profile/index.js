import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container, InputGroup, InputItem } from './styles';

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

        <InputGroup>
          <InputItem>
            <Input name="firstname" label="Nome" />
          </InputItem>

          <InputItem>
            <Input name="lastname" label="Sobrenome" />
          </InputItem>
        </InputGroup>

        <InputGroup>
          <InputItem>
            <Input type="email" name="email" label="Email" disabled />
          </InputItem>
          <InputItem>
            <Input name="phone" label="Celular" />
          </InputItem>
        </InputGroup>

        <InputGroup>
          <InputItem>
            <Input name="cpf" label="CPF" disabled />
          </InputItem>
          <InputItem>
            <Input name="rg" label="RG" disabled />
          </InputItem>
        </InputGroup>

        <hr />

        <InputGroup>
          <InputItem>
            <Input name="zipcode" label="CEP" disabled />
          </InputItem>
          <InputItem>
            <Input name="street_number" label="Número" disabled />
          </InputItem>
        </InputGroup>

        <InputGroup>
          <InputItem>
            <Input name="neighborhood" label="Bairro" disabled />
          </InputItem>
          <InputItem>
            <Input name="street" label="Logradouro" disabled />
          </InputItem>
        </InputGroup>

        <InputGroup>
          <InputItem>
            <Input name="city" label="Cidade" disabled />
          </InputItem>
          <InputItem>
            <Input name="state" label="UF" disabled />
          </InputItem>
        </InputGroup>

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
