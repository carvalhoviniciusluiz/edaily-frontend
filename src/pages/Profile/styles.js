import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  margin-bottom: 100px;

  @media (max-width: 662px) {
    padding: 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: block;
      font-size: 14px;
      margin-bottom: 10px;
      color: #fff;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input:disabled {
      cursor: not-allowed;
      color: rgba(255, 255, 255, 0.4);
      font-weight: bold;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
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
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 20px;
  }

  @media (max-width: 662px) {
    flex-direction: column;

    & > div:first-child {
      margin-right: 0;
    }
  }
`;

export const InputItem = styled.div`
  width: 380px;
  position: relative;
  margin-bottom: 10px;

  @media (max-width: 662px) {
    width: 100%;
  }
`;
