import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    background: rgba(0, 0, 0, 0.1);

    @media (max-width: 512px) {
      a {
        width: 100% !important;
        border-radius: 0 !important;
        height: 60px !important;
        margin: 0 !important;
        border-bottom: 1px solid #fff;
        transition: 0.1s;

        span {
          display: none;
        }
      }
    }

    a {
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
      transition: 0.1s;

      background: rgba(0, 0, 0, 0.1);

      cursor: pointer;

      span {
        margin-top: 10px;
      }

      &:hover {
        font-weight: bold;
        background: #4486c8;
      }

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);
      }

      &.active {
        background: #4a93dc;
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
