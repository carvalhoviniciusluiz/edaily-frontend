import React from 'react';
import PropTypes from 'prop-types';

import { PaperFullScreen, PaperActions } from './styles';

export default function PageFullscreen({ children, ...res }) {
  const { open, setOpen, showActions = true, background } = res;

  if (!open) {
    return null;
  }

  return (
    <PaperFullScreen background={background}>
      <PaperActions showActions={showActions}>
        <button type="button" onClick={() => setOpen(false)}>
          x
        </button>
      </PaperActions>
      {children}
    </PaperFullScreen>
  );
}

PageFullscreen.propTypes = {
  children: PropTypes.node.isRequired,
};
