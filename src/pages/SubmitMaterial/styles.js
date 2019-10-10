import styled from 'styled-components';

import { darken } from 'polished';

import { Form as __Form } from '@rocketseat/unform';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
`;

export const Form = styled(__Form)`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-top: 40px;

  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  hr {
    background: #f4f4f4;
  }

  @media (max-width: 662px) {
    margin: 0 10px;
    margin-top: 40px;
  }

  header {
    display: flex;
    align-self: center;
    align-items: center;

    strong {
      color: #444;
      font-size: 18px;
      margin: 0;
    }
  }

  select {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #444;
    margin: 0 0 10px;
    font-size: 18px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #444;
    margin: 0 0 10px;

    &::placeholder {
      color: #333;
    }
  }

  & > button {
    height: 44px;
    width: 100%;
    font-weight: bold;
    color: #fff;
    background-color: #00a65a;
    border-color: #008d4c;
    border-radius: 4px;
    font-size: 16px;
    margin: 50px 0 0;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#00a65a')};
    }

    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  justify-self: center;
  margin-bottom: 40px;

  @media (max-width: 662px) {
    display: flex;
    flex-direction: column;

    div {
      input,
      select {
        width: 100% !important;
      }
    }
  }

  & > label {
    display: flex;
    flex-direction: column;

    div {
      display: block;
      margin-top: 15px;
      color: #444;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;

      input[type='checkbox'] {
        width: 0;
        height: 1em;
        width: 1.5em;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;

    label {
      color: #444;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
      margin-top: 15px;
    }

    select {
      width: 270px;
      font-size: 14px;
    }

    input {
      width: 270px;
    }
  }
`;
