import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import { MdMailOutline, MdInfoOutline } from 'react-icons/md';

import ModalComponent from '~/components/Modal';
import PageFullscreen from '../PageFullscreen';

import {
  Header,
  Body,
  Footer,
  CancelButton,
  SaveButton,
  InputGroup,
  InputItem,
} from './styles';

export default function Modal({ setShow, show }) {
  const user = useSelector(state => state.clientUser.user);
  const [openPage, setOpenPage] = useState(false);

  const disable = target => {
    return target && target.is_responsible;
  };

  const getAttr = (attr, target) => {
    return target && target[attr];
  };

  const handlePasswordRequest = () => {
    console.tron.log('handlePasswordRequest');
  };

  const handleConfirmationRequest = () => {
    setOpenPage(true);
  };

  return (
    <>
      <PageFullscreen open={openPage} setOpen={setOpenPage} />

      <ModalComponent show={show} height={500}>
        <Header>
          <h4 className="title">
            {getAttr('firstname', user)}
            <span>{getAttr('lastname', user)}</span>
            <small>#{getAttr('uuid', user)}</small>
          </h4>
          <button type="button" onClick={() => setShow(false)}>
            <span>×</span>
          </button>
        </Header>

        <Body>
          <Form initialData={user}>
            <div className="avatar">
              {user && <img src={user.avatar.avatar} alt="Avatar" />}
            </div>

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
                <Input name="zipcode" label="CEP" disabled={disable(user)} />
              </InputItem>
              <InputItem>
                <Input
                  name="street_number"
                  label="Número"
                  disabled={disable(user)}
                />
              </InputItem>
            </InputGroup>

            <InputGroup>
              <InputItem>
                <Input
                  name="neighborhood"
                  label="Bairro"
                  disabled={disable(user)}
                />
              </InputItem>
              <InputItem>
                <Input
                  name="street"
                  label="Logradouro"
                  disabled={disable(user)}
                />
              </InputItem>
            </InputGroup>

            <InputGroup>
              <InputItem>
                <Input name="city" label="Cidade" disabled={disable(user)} />
              </InputItem>
              <InputItem>
                <Input name="state" label="UF" disabled={disable(user)} />
              </InputItem>
            </InputGroup>

            <hr />

            <a href="#sending" onClick={handlePasswordRequest}>
              <MdMailOutline size={22} />
              <span>Enviar email de confirmação</span>
            </a>
            <a href="#sending" onClick={handleConfirmationRequest}>
              <MdMailOutline size={22} />
              <span>Enviar email para alteração de senha</span>
            </a>

            <hr />

            <a href="#sending" onClick={handleConfirmationRequest}>
              <MdInfoOutline size={22} />
              <span>Consultar histórico de envio de matérias</span>
            </a>
          </Form>
        </Body>

        <Footer>
          <CancelButton onClick={() => setShow(false)}>cancelar</CancelButton>
          <SaveButton>Salvar</SaveButton>
        </Footer>
      </ModalComponent>
    </>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
