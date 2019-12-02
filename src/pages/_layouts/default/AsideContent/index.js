import React from 'react';
import PropTypes from 'prop-types';

import { MdMenu } from 'react-icons/md';

import { Container } from './styles';

export default function AsideContent({ children, ...rest }) {
  const {
    checked,
    handleInputChange,
    background,
    zIndex,
    showAction = true,
  } = rest;

  return (
    <Container background={background} zIndex={zIndex}>
      {showAction && (
        <>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleInputChange}
          />
          <span className="hamburger">
            <MdMenu size={33} color="#fff" />
          </span>
        </>
      )}
      {children}
    </Container>
  );
}

AsideContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
