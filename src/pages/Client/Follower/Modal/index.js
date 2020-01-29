/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import ModalComponent from '~/components/Modal';

import {
  Header,
  Title,
  BtnClose,
  Footer,
  BtnCancel,
  BtnStop,
  InputItem,
  ItemBody,
  ItemAction,
  Form,
  FormBody,
  Input,
} from './styles';

export default function Modal({ setShow, show }) {
  const document = useSelector(state => state.document.follower.document);

  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <ModalComponent show={show} height={300}>
      <Header>
        <Title>
          <strong>{document && document.protocol}</strong>
          <small>{document && document.file.name}</small>
        </Title>
        <BtnClose onClick={() => setShow(false)}>
          <span>×</span>
        </BtnClose>
      </Header>

      <Form onSubmit={handleSubmit} initialData={document}>
        <FormBody>
          <InputItem>
            <label>Data de publicação</label>
            <ItemBody>
              <Input name="updatedAt" disabled />
              <ItemAction>
                <button type="button">Alterar</button>
              </ItemAction>
            </ItemBody>
          </InputItem>
        </FormBody>

        <Footer>
          <BtnStop type="submit">Sustar publicação</BtnStop>
          <BtnCancel onClick={() => setShow(false)}>cancelar</BtnCancel>
        </Footer>
      </Form>
    </ModalComponent>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
