import React from 'react';
import PropTypes from 'prop-types';

import { PaperFullScreen, PaperActions } from './styles';

export default function PageFullscreen({ children, ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  return (
    <PaperFullScreen>
      <PaperActions>
        <button type="button" onClick={() => setOpen(false)}>
          x
        </button>
      </PaperActions>
      {children}
    </PaperFullScreen>
  );
}

PageFullscreen.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
