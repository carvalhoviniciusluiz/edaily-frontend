import React from 'react';
import PropTypes from 'prop-types';

import PageFullscreen from '~/components/PageFullscreen';

import { Avatar } from './styles';

export default function PanelComponent({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  return (
    <PageFullscreen open={open} setOpen={setOpen}>
      <Avatar>
        <img
          src="http://127.0.0.1:3333/avatars/90246adc-ee91-4152-ba72-1a1d8cfa44d6"
          alt="avatar"
        />

        <strong>Vinicius Carvalho</strong>
        <span>carvalho.viniciusluiz@gmail.com</span>
      </Avatar>
    </PageFullscreen>
  );
}

PanelComponent.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
