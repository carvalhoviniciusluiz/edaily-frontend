import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  overflow-y: auto;
  background: linear-gradient(-90deg, #152357, #599bc1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;

  img {
    width: 250px;
    height: 250px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      width: 290px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    @media (max-width: 662px) {
      label {
        input[type='checkbox'] {
          margin: 0 10px;
        }
        span {
          font-size: 12px;
        }
      }
      button[type='submit'] {
        margin: 0 10px;
      }
    }

    strong:not(.none) {
      margin-top: 10px;
      margin-bottom: 50px;
    }

    strong {
      span {
        color: #fff;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    label {
      vertical-align: top;
      margin-bottom: 15px;
      text-align: left;

      span {
        color: #fff;
        font-weight: bold;
        margin-left: 5px;
      }

      input[type='checkbox'] {
        height: 0.95em;
        width: 0.95em;
      }

      a {
        text-decoration: underline;
      }
    }

    & > button {
      margin: 30px 0 0;
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

      &:disabled {
        background: #444;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Address = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  justify-self: center;
  margin-bottom: 40px;
  text-align: right;

  @media (max-width: 662px) {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }

  h3 {
    color: #fff;
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
  }

  label {
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  span {
    color: #fb6f91;
    font-weight: bold;
  }

  input {
    width: 100%;
    background: #19181f;
    border: 2px solid #25242c;
    border-radius: 5px;
    padding: 15px 21px;
    margin-top: 8px;
    font-size: 14px;
    margin-bottom: 15px;
    color: #fff;
  }
`;

export const Title = styled.h1`
  color: #fff;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
`;

export const Legend = styled.h3`
  color: #fff;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
`;

export const SubstituteCard = styled.div`
  background: #666;
  padding: 0 15px;
  margin-bottom: 50px;
  border-radius: 4px;
  opacity: 0.8;

  div {
    text-align: left;
    div {
      text-align: right;
      div,
      input {
        width: 274px !important;
      }
    }
  }

  @media (max-width: 600px) {
    border-radius: 0;
  }

  strong {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      text-decoration: underline;
      margin-bottom: 30px;
    }
  }
`;
