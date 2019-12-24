import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 290px;
`;

export const InputGroupAddon = styled.div`
  display: flex;

  input {
    border-bottom-right-radius: 0px !important;
    border-top-right-radius: 0px !important;
    font-size: 14px;
    border-right: none;
    padding-right: 6px;
    background: transparent !important;
    border: 2px solid #e5e5e5 !important;
    border-right: 0 !important;
  }
`;

export const InputGroupAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  border: 2px solid #e5e5e5;
  border-left: 0;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  padding-right: 16px;

  button {
    background: transparent;
    color: #fff;
    border: 0;
    margin-left: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
