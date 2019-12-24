import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  & > button {
    height: 44px;
    width: 100%;
    font-weight: bold;
    color: #333;
    background-color: #fff;
    border-color: #eee;
    border-radius: 4px;
    margin-bottom: 100px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#fff')};
    }

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @media (max-width: 662px) {
    & > button {
      position: absolute;
      border-radius: 0;
      width: 100%;
      top: 82%;
      right: 0;
      height: 66px;
      margin: 0;
    }
  }

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
        margin-bottom: 160px;
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

  canvas,
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
