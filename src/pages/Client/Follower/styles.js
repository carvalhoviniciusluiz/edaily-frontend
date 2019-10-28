import styled from 'styled-components';

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
      margin-bottom: 50px;
    }
  }
`;

export const Panel = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  & + li {
    margin-top: 15px;
  }

  @media (max-width: 662px) {
    margin: 0 10px;

    p {
      width: inherit !important;
    }

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

  p {
    width: 560px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-top: 15px;

    strong {
      font-size: 18px;
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
`;

export const Button = styled.button.attrs(props => ({
  disabled: props.desable,
}))`
  border: 0;
  background: none;

  opacity: ${props => (props.desable ? 0.2 : 1)};
`;
