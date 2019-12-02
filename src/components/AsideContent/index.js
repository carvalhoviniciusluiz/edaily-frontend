import React from 'react';
import PropTypes from 'prop-types';

import { MdMenu } from 'react-icons/md';

import { Container } from './styles';

export default function AsideContent({ checked, handleInputChange, children }) {
  return (
    <Container>
      <input type="checkbox" checked={checked} onChange={handleInputChange} />
      <span className="hamburger">
        <MdMenu size={33} color="#fff" />
      </span>
      {children}
    </Container>
  );
}

AsideContent.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
