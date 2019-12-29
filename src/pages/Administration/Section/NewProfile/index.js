/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import PropTypes from 'prop-types';

import ModalComponent from '~/components/Modal';

import {
  Header,
  Title,
  BtnClose,
  Body,
  Form,
  Check,
  Input,
  Label,
  Divider,
  Footer,
  BtnCancel,
  BtnAdd,
} from './styles';

export default function NewProfile({ setShow, show }) {
  return (
    <ModalComponent show={show} width={600} height="none">
      <Header>
        <Title>Incluir nova sessão</Title>
        <BtnClose onClick={() => setShow(false)}>
          <span>×</span>
        </BtnClose>
      </Header>

      <Body>
        <Form>
          <Input name="name" label="Nome da sessão" />

          <Label>
            <Check name="is_active" />
            <span>Ativar sessão</span>
          </Label>

          <Divider />

          <Input
            type="password"
            name="password"
            label="Digite sua senha para confirmar a operação"
          />
        </Form>
      </Body>

      <Footer>
        <BtnCancel onClick={() => setShow(false)}>cancelar</BtnCancel>
        <BtnAdd>Salvar</BtnAdd>
      </Footer>
    </ModalComponent>
  );
}

NewProfile.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
