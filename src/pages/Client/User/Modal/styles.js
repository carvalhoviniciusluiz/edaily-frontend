import styled from 'styled-components';

import { darken } from 'polished';

export const Header = styled.div`
  min-height: 14px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  background: #fafafa;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 18px;
    font-weight: 500;

    small {
      font-weight: 400;
      line-height: 1;
      color: #777;
      margin-left: 5px;
    }

    span {
      margin-left: 5px;
    }

    @media (max-width: 497px) {
      small {
        display: none;
      }
    }

    @media (max-width: 199px) {
      span {
        display: none;
      }
    }
  }

  button {
    border: 0;
    padding: 0;
    background: 0;
    font-weight: 700;
    opacity: 0.2;
    font-size: 21px;
    color: #000;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Body = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;

  position: relative;
  padding: 16px 24px;
  height: 400px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
    margin-bottom: 15px;

    div.avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;

      canvas,
      img {
        height: 120px;
        width: 120px;
        border-radius: 4px;
        border: 1px solid #eee;
        background: #eee;
      }
    }

    label {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
      color: #333;

      input[type='checkbox'] {
        height: 0.95em;
        width: 0.95em;

        margin-top: 22px;
      }

      span {
        margin-left: 5px;
      }
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input:disabled {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }

    hr {
      background: rgba(0, 0, 0, 0.2);
      margin: 20px 0 20px;
    }

    a {
      display: flex;
      align-items: center;

      border: 0;
      margin: 10px 0;
      color: #333;

      span {
        margin-left: 5px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Footer = styled.div`
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
  width: 100%;
  top: 91%;
  background: #fafafa;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  border: 0;
  color: #333;
  background: transparent;
  margin-right: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export const SaveButton = styled.button`
  margin: 0;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  background: transparent;

  background: #3b9eff;
  color: #fff;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#3b9eff')};

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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

  &.custom-field {
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 0;
      border-radius: 2px;
      padding: 3px 4px;
      margin-bottom: 18px;
      background: #3b9eff;
      color: #fff;
      width: 120px;
      line-height: 1;
      font-size: 12px;
      font-weight: 600;
      box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
    }

    div {
      display: flex;

      input {
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        font-size: 14px;
        border-right: none;
        padding-right: 6px;
        background: transparent;
        border: 2px solid #e5e5e5;
        border-right: 0;
      }

      .actions {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 44px;
        color: rgb(68, 67, 75);
        background: transparent;
        border: 2px solid #e5e5e5;
        border-left: 0;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        padding-right: 16px;

        button {
          background: transparent;
          border: 0;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
