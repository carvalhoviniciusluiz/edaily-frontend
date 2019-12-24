import { Form as _Form } from '@rocketseat/unform';
import styled from 'styled-components';

export const Form = styled(_Form)`
  max-width: 360px;
  margin: 0 auto;

  @media (max-width: 882px) {
    max-width: 100%;
  }
`;
