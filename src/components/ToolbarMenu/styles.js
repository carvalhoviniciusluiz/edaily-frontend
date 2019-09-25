import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  .container {
    display: flex;
    background: rgba(0, 0, 0, 0.1);

    @media (max-width: 512px) {
      & {
        display: none;
      }
    }

    div {
      background: #333;
      border-radius: 4px;
      margin: 8px 4px;
      height: 80px;
      width: 100px;
      font-size: 1em;
      color: #fff;

      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      &:hover {
        font-weight: bold;
        background: rgb(25, 24, 31);
      }
    }
  }

  .center {
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
      }

      svg {
        margin-bottom: 10px;
      }
    }
  }
`;
