/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { MdMailOutline, MdInfoOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import AvatarOrIdenticon from '~/components/AvatarOrIdenticon';
import InputGroupAddon from '~/components/Fields/InputGroup';
import ModalComponent from '~/components/Modal';
import {
  sendForgotPassword,
  sendConfirmation,
} from '~/store/modules/client/user/actions';

import DocumentHistory from '../DocumentHistory';
import {
  Header,
  Title,
  BtnClose,
  Body,
  Form,
  InputGroup,
  InputItem,
  Input,
  Check,
  BtnInfo,
  AcceptTerms,
  Footer,
  BtnCancel,
  BtnSubmit,
} from './styles';

export default function Modal({ setShow, show }) {
  const user = useSelector(state => state.clientUser.user);
  const [openPage, setOpenPage] = useState(false);

  const dispatch = useDispatch();

  const isDisabled = target => {
    return target && target.is_responsible && target.is_active
      ? 'disabled'
      : undefined;
  };

  const handlePasswordRequest = () => {
    const { email } = user;

    dispatch(sendForgotPassword({ email }));
  };

  const handleConfirmationRequest = () => {
    const { email } = user;

    dispatch(sendConfirmation({ email }));
  };

  return (
    <>
      <DocumentHistory open={openPage} setOpen={setOpenPage} />

      <ModalComponent show={show} height={500}>
        <Header>
          <Title className="title">
            {user && user.firstname}

            <span>{user && user.lastname}</span>
            <small>#{user && user.uuid}</small>
          </Title>
          <BtnClose onClick={() => setShow(false)}>
            <span>×</span>
          </BtnClose>
        </Header>

        <Body>
          <Form initialData={user}>
            <AvatarOrIdenticon user={user || {}} size={120} encapsulated />

            <InputGroup>
              <InputItem>
                <Input name="firstname" label="Nome" />
              </InputItem>

              <InputItem>
                <Input name="lastname" label="Sobrenome" />
              </InputItem>
            </InputGroup>

            <InputGroup>
              <InputItem className="custom">
                <label>Email</label>
                <div>
                  <Input type="email" name="email" disabled />
                  <div className="actions">
                    <button type="button">Alterar</button>
                  </div>
                </div>

                {user && !!user.confirmed_at && (
                  <span>
                    Email Confirmado
                    <MdInfoOutline size={14} />
                  </span>
                )}
              </InputItem>

              <InputItem>
                <Input name="phone" label="Celular" />
              </InputItem>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon
                name="cpf"
                label="CPF"
                button-label="Alterar"
                disabled
              >
                <button type="button" color="#333">
                  Alterar
                </button>
              </InputGroupAddon>

              <InputGroupAddon
                name="rg"
                label="RG"
                button-label="Alterar"
                disabled
              >
                <button type="button" color="#333">
                  Alterar
                </button>
              </InputGroupAddon>
            </InputGroup>

            <hr />

            <InputGroup>
              <InputGroupAddon
                name="zipcode"
                label="CEP"
                button-label="Alterar"
                disabled={isDisabled(user)}
              >
                <button type="button" color="#333">
                  Alterar
                </button>
              </InputGroupAddon>

              <InputGroupAddon
                name="street_number"
                label="Número"
                button-label="Alterar"
                disabled={isDisabled(user)}
              >
                <button type="button" color="#333">
                  Alterar
                </button>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputItem>
                <Input
                  name="neighborhood"
                  label="Bairro"
                  disabled={isDisabled(user)}
                />
              </InputItem>
              <InputItem>
                <Input
                  name="street"
                  label="Logradouro"
                  disabled={isDisabled(user)}
                />
              </InputItem>
            </InputGroup>

            <InputGroup>
              <InputItem>
                <Input name="city" label="Cidade" disabled={isDisabled(user)} />
              </InputItem>
              <InputItem>
                <Input name="state" label="UF" disabled={isDisabled(user)} />
              </InputItem>
            </InputGroup>

            <AcceptTerms>
              <Check name="is_active" />
              <span>Ativar conta de usuário</span>
            </AcceptTerms>

            <hr />

            {user && !user.confirmed_at && (
              <BtnInfo onClick={handleConfirmationRequest}>
                <MdMailOutline size={22} />
                <span>Enviar email de confirmação</span>
              </BtnInfo>
            )}

            <BtnInfo onClick={handlePasswordRequest}>
              <MdMailOutline size={22} />
              <span>Enviar email para alteração de senha</span>
            </BtnInfo>

            <hr />

            <BtnInfo onClick={() => setOpenPage(true)}>
              <MdInfoOutline size={22} />
              <span>Consultar histórico de envio de matérias</span>
            </BtnInfo>
          </Form>
        </Body>

        <Footer>
          <BtnCancel onClick={() => setShow(false)}>cancelar</BtnCancel>
          <BtnSubmit>Salvar</BtnSubmit>
        </Footer>
      </ModalComponent>
    </>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
