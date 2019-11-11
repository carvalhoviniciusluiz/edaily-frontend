/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Identicon from 'react-identicons';

import PropTypes from 'prop-types';
import { Form, Input, Check } from '@rocketseat/unform';

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

import { sendConfirmation } from '~/store/modules/client/user/actions';

export default function Modal({ setShow, show }) {
  const user = useSelector(state => state.clientUser.user);
  const [openPage, setOpenPage] = useState(false);

  const dispatch = useDispatch();

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
    const { email } = user;

    dispatch(sendConfirmation({ email }));
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
              {user && user.avatar ? (
                <img src={user.avatar.avatar} alt="Avatar" />
              ) : (
                <Identicon
                  string={`${user && user.firstname} ${user && user.lastname}`}
                  size={120}
                  bg="#fff"
                  fg="#333"
                />
              )}
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
              <InputItem className="custom-field">
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
              <InputItem className="custom-field">
                <label>CPF</label>
                <div>
                  <Input name="cpf" disabled />
                  <div className="actions">
                    <button type="button">Alterar</button>
                  </div>
                </div>
              </InputItem>
              <InputItem className="custom-field">
                <label>RG</label>
                <div>
                  <Input name="rg" disabled />
                  <div className="actions">
                    <button type="button">Alterar</button>
                  </div>
                </div>
              </InputItem>
            </InputGroup>

            <hr />

            <InputGroup>
              <InputItem className="custom-field">
                <label>CEP</label>
                <div>
                  <Input name="zipcode" disabled={disable(user)} />
                  <div className="actions">
                    <button type="button">Alterar</button>
                  </div>
                </div>
              </InputItem>
              <InputItem className="custom-field">
                <label>Número</label>
                <div>
                  <Input name="street_number" disabled={disable(user)} />
                  <div className="actions">
                    <button type="button">Alterar</button>
                  </div>
                </div>
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

            <label htmlFor="terms-authorized">
              <Check name="is_active" />
              <span>Ativar conta de usuário</span>
            </label>

            <hr />

            {user && !user.confirmed_at && (
              <strong onClick={handleConfirmationRequest} role="presentation">
                <MdMailOutline size={22} />
                <span>Enviar email de confirmação</span>
              </strong>
            )}

            <strong onClick={handlePasswordRequest} role="presentation">
              <MdMailOutline size={22} />
              <span>Enviar email para alteração de senha</span>
            </strong>

            <hr />

            <strong onClick={() => setOpenPage(true)} role="presentation">
              <MdInfoOutline size={22} />
              <span>Consultar histórico de envio de matérias</span>
            </strong>
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
