import { Form as form, Input as input } from '@rocketseat/unform';
import { darken } from 'polished';
import styled from 'styled-components';

export const Title = styled.h4`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;

  width: 550px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  strong {
    color: #333;
    font-weight: normal;
    font-size: 22px;
  }

  small {
    font-size: 12px;
    line-height: 1;
    color: #777;
    margin-top: 10px;
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
`;

export const BtnClose = styled.button.attrs({
  type: 'button',
})`
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
`;

export const Header = styled.div`
  min-height: 14px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  background: #fafafa;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled(form)`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-bottom: 15px;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: #333;
  }
`;

export const Input = styled(input)`
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

  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
`;

export const FormBody = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  position: relative;
  padding: 16px 24px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: space-between;
`;

export const BtnCancel = styled.button`
  border: 0;
  color: #333;
  background: transparent;
  margin-right: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export const BtnStop = styled.button`
  margin: 0;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  font-weight: bold;
  width: 250px;
  margin-left: 11px;

  background: #fb6f91;
  color: #fff;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#fb6f91')};

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export const ItemBody = styled.div`
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
`;

export const ItemAction = styled.div.attrs({
  className: 'actions',
})`
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
`;

export const InputItem = styled.div`
  position: relative;
  margin-bottom: 10px;

  @media (max-width: 662px) {
    width: 100%;
  }
`;
