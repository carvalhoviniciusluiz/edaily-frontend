import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    div {
      input[type='text'] {
        border: 0;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.2);
        max-width: 60px;
        text-align: center;
      }

      strong,
      input {
        color: #fff;
        font-size: 24px;
        margin: 10px;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(${props => (props.length > 1 ? 2 : 1)}, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  @media (max-width: 662px) {
    ul {
      display: flex;
      flex-direction: column;

      margin: 0 10px;
      margin-top: 30px;

      li {
        & + li {
          margin-top: 15px;
        }
      }

      li:last-child {
        margin-bottom: 50px;
      }
    }
  }
`;

export const ArrowButton = styled.button.attrs(props => ({
  disabled: props.desable,
}))`
  border: 0;
  background: none;

  opacity: ${props => (props.desable ? 0.2 : 1)};
`;

export const UserPanel = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.inative ? 0.6 : 1)};

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid ${props => (props.inative ? '#f196ac' : '#599bc1')};
    background: #eee;
  }

  @media (max-width: 662px) {
    a {
      border-left: 1px solid #666;
      padding-left: 15px;
    }
  }

  div {
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      strong {
        text-decoration: underline;
      }
    }

    strong {
      display: block;
      color: ${props => (props.inative ? '#999' : '#666')};
      font-size: 20px;
      font-weight: normal;
    }

    span {
      display: block;
      margin-top: 3px;
      color: ${props => (props.inative ? '#999' : '#666')};
    }
  }

  button {
    border: 0;
  }
`;

export const ModalHeader = styled.div`
  min-height: 14px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  background: #fafafa;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .modal-title {
    font-size: 18px;
    font-weight: 500;

    small {
      font-weight: 400;
      line-height: 1;
      color: #777;
    }

    @media (max-width: 392px) {
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

export const ModalBody = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;

  position: relative;
  padding: 16px 24px;
  height: 400px;
`;

export const ModalFooter = styled.div`
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
