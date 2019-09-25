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

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Panel = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

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
`;
