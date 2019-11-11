/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';

import PageFullscreen from '~/components/PageFullscreen';
import { Container, Title } from './styles';

export default function NewUser({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  return (
    <PageFullscreen
      open={open}
      setOpen={setOpen}
      background="#f8f8f8"
      showActions={false}
    >
      <Container>
        <Title>
          <div className="actions">
            <button type="button" onClick={() => setOpen(false)}>
              x
            </button>
            <h2>Cadastrode usuários</h2>
          </div>
          <button type="button">salvar</button>
        </Title>
      </Container>
    </PageFullscreen>
  );
}

NewUser.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
