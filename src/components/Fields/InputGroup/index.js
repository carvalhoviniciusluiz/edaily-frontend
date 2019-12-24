import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Conteiner, InputGroupAddon, InputGroupAction } from './styles';

export default function InputGroup({ children, ...rest }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const { label, name } = rest;

  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => setErrorMessage(error), [error]);

  const parseSelectValue = inputRef => {
    const inputValue = inputRef.value;
    return inputValue;
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: inputRef => {
        inputRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  const getDefaultValue = () => {
    if (!defaultValue) return null;
    return defaultValue;
  };

  return (
    <Conteiner>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <InputGroupAddon>
        <input
          name={fieldName}
          aria-label={fieldName}
          defaultValue={getDefaultValue()}
          ref={ref}
          {...rest}
        />

        <InputGroupAction>{children}</InputGroupAction>
      </InputGroupAddon>

      {errorMessage && <span>{errorMessage}</span>}
    </Conteiner>
  );
}

InputGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
