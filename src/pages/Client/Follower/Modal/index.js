/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import ModalComponent from '~/components/Modal';

import {
  Header,
  Body,
  Footer,
  BtnCancel,
  BtnStop,
  InputItem,
  Form,
  Input,
} from './styles';

export default function Modal({ setShow, show }) {
  const document = useSelector(state => state.follow.document);

  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <ModalComponent show={show} height={300}>
        <Header>
          <h4 className="h4">
            <strong>{document && document.protocolNumber}</strong>
            <small>{document && document.file.name}</small>
          </h4>
          <button type="button" onClick={() => setShow(false)}>
            <span>×</span>
          </button>
        </Header>

        <Form onSubmit={handleSubmit} initialData={document}>
          <Body>
            <InputItem className="custom-field">
              <label>Data de publicação</label>
              <div>
                <Input name="forwardedAt" disabled />
                <div className="actions">
                  <button type="button">Alterar</button>
                </div>
              </div>
            </InputItem>
          </Body>

          <Footer>
            <BtnStop type="submit">Sustar publicação</BtnStop>
            <BtnCancel onClick={() => setShow(false)}>cancelar</BtnCancel>
          </Footer>
        </Form>
      </ModalComponent>
    </>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
