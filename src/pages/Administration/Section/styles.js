import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
`;

export const Navegation = styled.header`
  display: flex;
  align-self: center;
  align-items: center;
`;

export const NavegationContent = styled.div`
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
`;

export const BtnNavegation = styled.button.attrs(props => ({
  disabled: props.desable,
}))`
  border: 0;
  background: none;

  opacity: ${props => (props.desable ? 0.2 : 1)};
`;

export const PanelList = styled.ul`
  margin-top: 30px;

  li:last-child {
    margin-bottom: 100px;
  }
`;

export const Panel = styled.li.attrs(() => ({
  className: 'with-shading',
}))`
  padding: 26px 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  & + li {
    margin-top: 15px;
  }

  @media (max-width: 662px) {
    margin: 0 10px;

    div {
      strong {
        span {
          span.lastname {
            display: none;
          }
        }
      }
      strong.time {
        display: none;
      }
    }
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    display: flex;
    align-items: center;
    color: #666;

    font-weight: normal;

    span {
      span {
        margin-left: 5px;
      }
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const PanelBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  @media (max-width: 662px) {
    p {
      strong {
        font-size: 18px !important;
      }
    }
  }

  p {
    width: 425px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    margin-top: 15px;

    strong {
      color: #333;
      font-size: 28px;
      font-weight: normal;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    width: 100px;
    border: 0;
    padding: 8px;
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);
    }
  }
`;

export const BtnInactive = styled.button.attrs(() => ({
  className: 'btn-inactive',
}))`
  background-color: #aaa;
  color: #fff;

  &:hover {
    background: ${darken(0.03, '#aaa')};
  }
`;

export const BtnActive = styled.button.attrs(() => ({
  className: 'btn-active',
}))`
  background-color: #3085d6;
  color: #fff;

  &:hover {
    background: ${darken(0.03, '#3085d6')};
  }
`;

export const BtnEdit = styled.button.attrs(() => ({
  className: 'btn-edit',
}))`
  background-color: #fff;
  color: #333;
  border: 2px solid #eee !important;

  &:hover {
    background: ${darken(0.03, '#fff')};
  }
`;

export const BtnAdd = styled.button.attrs(() => ({
  className: 'btn-active',
}))`
  position: fixed;
  bottom: 10%;
  right: 5%;
  padding: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    background: ${darken(0.03, '#f3f3f3')};
  }

  @media (max-width: 882px) {
    background: #fff;
    border-radius: 0;
    width: 100%;
    top: 82%;
    right: 0;
    height: 66px;
  }
`;
