import React from 'react';
import PropTypes from 'prop-types';

import { MdHistory } from 'react-icons/md';

import { Container } from './styles';

export default function AsideContent({ children, ...rest }) {
  const { checked, handleInputChange, background } = rest;

  return (
    <Container background={background}>
      <>
        <input
          type="checkbox"
          className="input-change"
          checked={checked}
          onChange={handleInputChange}
        />
        <span className="button-change">
          <MdHistory size={33} />
        </span>
      </>
      {children}
    </Container>
  );
}

AsideContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
