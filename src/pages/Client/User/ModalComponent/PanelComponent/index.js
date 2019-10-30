import React from 'react';
import PropTypes from 'prop-types';

import { PaperFullScreen, PanelClose, Avatar } from './styles';

export default function PanelComponent({ ...res }) {
  const { open, onClose } = res;

  if (!open) {
    return null;
  }

  return (
    <PaperFullScreen>
      <header>
        <PanelClose>
          <button type="button" onClick={() => onClose(false)}>
            x
          </button>
        </PanelClose>

        <Avatar>
          <img
            src="http://127.0.0.1:3333/avatars/90246adc-ee91-4152-ba72-1a1d8cfa44d6"
            alt="avatar"
          />

          <strong>Vinicius Carvalho</strong>
          <span>carvalho.viniciusluiz@gmail.com</span>
        </Avatar>
      </header>
    </PaperFullScreen>
  );
}

PanelComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
