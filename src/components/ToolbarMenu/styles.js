import styled from 'styled-components';

export const Container = styled.div`
  .container {
    display: flex;
    background: rgba(0, 0, 0, 0.1);

    @media (max-width: 512px) {
      & {
        display: none;
      }
    }

    a {
      background: #333;
      border-radius: 4px;
      margin: 8px 4px;
      height: 80px;
      width: 100px;
      font-size: 1em;
      color: #fff;

      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      span {
        margin-top: 10px;
      }

      &:hover {
        font-weight: bold;
        background: #444;
      }

      &.active {
        background: #222;
        font-weight: bold;
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
