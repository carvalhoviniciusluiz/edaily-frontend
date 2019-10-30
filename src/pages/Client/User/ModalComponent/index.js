import React from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';

import { Header, Body, Footer, CancelButton, SaveButton } from './styles';

export default function ModalComponent({ setShow, show }) {
  return (
    <Modal show={show} height={500}>
      <Header>
        <h4 className="title">
          Vinicius <span>Carvalho</span> <small>#424-67554-5643-64533</small>
        </h4>
        <button type="button" onClick={() => setShow(false)}>
          <span>×</span>
        </button>
      </Header>

      <Body>
        {[...new Array(50)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </Body>

      <Footer>
        <CancelButton onClick={() => setShow(false)}>cancelar</CancelButton>
        <SaveButton>Salvar</SaveButton>
      </Footer>
    </Modal>
  );
}

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
