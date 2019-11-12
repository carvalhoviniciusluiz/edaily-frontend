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
    margin-top: 30px;

    li:last-child {
      margin-bottom: 100px;
    }
  }
`;

export const Panel = styled.li`
  padding: 26px 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  & + li {
    margin-top: 15px;
  }

  @media (max-width: 662px) {
    margin: 0 10px;

    div strong {
      span span {
        display: none;
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    strong.time {
      font-size: 24px;
    }

    strong {
      display: flex;
      align-items: center;
      color: #666;

      font-weight: normal;

      span span {
        margin-left: 5px;
      }

      svg {
        margin-right: 5px;
      }
    }
  }

  div {
    p {
      width: 425px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      margin-top: 15px;

      strong {
        font-size: 28px;
        margin-right: 28px;
        font-weight: normal;
      }

      a {
        color: #333;
        font-size: 18px;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    button {
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

    button.cancel {
      background-color: #aaa;
      color: #fff;

      &:hover {
        background: ${darken(0.03, '#aaa')};
      }
    }

    button.send {
      background-color: #3085d6;
      color: #fff;

      &:hover {
        background: ${darken(0.03, '#3085d6')};
      }
    }
  }
`;

export const Button = styled.button.attrs(props => ({
  disabled: props.desable,
}))`
  border: 0;
  background: none;

  opacity: ${props => (props.desable ? 0.2 : 1)};
`;
