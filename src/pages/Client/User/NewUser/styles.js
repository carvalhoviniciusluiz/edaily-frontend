import styled from 'styled-components';

import { darken } from 'polished';

import { Form as form, Input as input } from '@rocketseat/unform';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;
  color: #fff;
  background: #4a93dc;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & > h2 {
    font-weight: 444;
    font-weight: 555;
    margin-left: 30px;
  }

  & > button {
    border: 0;
    background: transparent;
    text-transform: uppercase;
    font-weight: 555;
    padding: 10px;
    margin-right: 34px;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      color: #fff;
    }
  }

  @media (max-width: 882px) {
    & > button {
      font-size: 16px;
      margin-right: 15px;
    }
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  margin-top: 40px;
  text-align: left;

  @media (max-width: 662px) {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }

  div {
    h3 {
      color: #333;
      margin-top: 25px;
      margin-bottom: 25px;
      text-align: center;
    }

    .fields {
      margin-bottom: 18px;

      label {
        display: block;
        color: #333;
        font-size: 14px;
        font-weight: bold;
      }

      span {
        color: #fb6f91;
        font-weight: bold;
      }
    }
  }
`;

export const Form = styled(form)`
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-top: 100px;
  margin: 0 auto;

  button {
    margin: 30px 0 0;
    width: 100%;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Input = styled(input)`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 5px;
  padding: 15px 21px;
  margin-top: 8px;
  font-size: 14px;
  margin-bottom: 6px;
  color: #333;
`;
