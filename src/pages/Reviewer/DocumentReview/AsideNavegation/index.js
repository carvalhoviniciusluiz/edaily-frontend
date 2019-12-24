import React from 'react';
import { MdDragHandle } from 'react-icons/md';

import { Container } from './styles';

export default function AsideContent({ ...rest }) {
  const { children, checked, handleInputChange, background } = rest;

  return (
    <Container background={background}>
      <>
        <input
          type="checkbox"
          className="input-review"
          checked={checked}
          onChange={handleInputChange}
        />
        <span className="button-review">
          <MdDragHandle size={33} />
        </span>
      </>
      {children}
    </Container>
  );
}
