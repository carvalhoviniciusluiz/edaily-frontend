import React from 'react';
import PropTypes from 'prop-types';

import { Lockscreen, Modal } from './styles';

export default function ModalComponent({ children, ...res }) {
  const { show, width, height } = res;

  if (!show) {
    return null;
  }

  return (
    <Lockscreen>
      <Modal width={width} height={height}>
        {children}
      </Modal>
    </Lockscreen>
  );
}

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
