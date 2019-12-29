import {
  Form as form,
  Input as input,
  Check as check,
} from '@rocketseat/unform';
import { darken } from 'polished';
import styled from 'styled-components';

export const Header = styled.div`
  min-height: 14px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  background: #fafafa;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
`;

export const BtnClose = styled.button`
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

export const Body = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;

  position: relative;
  padding: 0 25px;
  height: 295px;
`;

export const Form = styled(form)`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  margin-bottom: 15px;
`;

export const Input = styled(input)`
  background: rgba(0, 0, 0, 0.1);
  color: #333;
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  margin: 6px 0 10px;
  height: 44px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
`;

export const Check = styled(check)`
  width: 0.95em;
  height: 0.95em;
  margin-top: 22px;
  margin-right: 5px;
`;

export const Divider = styled.hr`
  background: rgba(0, 0, 0, 0.2);
  margin: 20px 0 20px;
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

export const BtnCancel = styled.button`
  border: 0;
  color: #333;
  background: transparent;
  margin-right: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export const BtnAdd = styled.button`
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
