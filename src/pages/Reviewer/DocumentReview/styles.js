import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;
  color: #fff;
  background: #4a93dc;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & > button {
    border: 0;
    background: transparent;
    text-transform: uppercase;
    font-weight: 555;
    padding: 10px;
    margin-right: 34px;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      color: #fff;
    }
  }

  @media (max-width: 882px) {
    & > button {
      font-size: 16px;
      margin-right: 15px;
    }
  }

  .react-tabs__tab-list {
    position: relative;
    margin: 0;
    border-bottom: 0;
    margin-left: 6px;
  }

  .react-tabs__tab {
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.7;

    &:focus {
      box-shadow: none;
      border-color: transparent;
      outline: none;

      &:after {
        background: transparent;
      }
    }
  }

  .react-tabs__tab:not(.react-tabs__tab--selected) {
    &:hover {
      opacity: 0.8;
    }
  }

  .react-tabs__tab--selected {
    background: transparent;
    border-color: transparent;
    color: #fff;
    border-radius: 0;
    opacity: 1;

    &::before {
      content: '';
      position: absolute;
      background-color: #fff;
      width: 100%;
      height: 4px;
      top: 40px;
      left: 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Aside = styled.aside`
  position: absolute;
  top: 64px;
  right: 0;
  width: 265px;
  height: 90%;
  border-left: 1px solid #afafaf;
  border-top: 1px solid #afafaf;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;

  header {
    display: flex;
    flex-direction: column;

    & > div.pagination:not(.title) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 0 10px;
      margin-top: 90px;
      border-top: 1px solid #afafaf;
      border-bottom: 1px solid #afafaf;

      button {
        border: 0;
      }

      input {
        width: 100%;
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 5px;
        padding: 10px 21px;
        font-size: 14px;
        margin-right: 8px;
        margin-left: 8px;
        margin-top: 8px;
        margin-bottom: 6px;
        color: #333;
      }

      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        input[type='text'] {
          width: 50px;
        }
      }
    }

    div.header {
      display: flex;
      flex-direction: column;
      margin: 20px 10px;

      & > div {
        display: flex;
        justify-content: space-between;

        &.spread {
          margin-top: 20px;
        }

        h2 {
          width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          cursor: help;
        }

        span {
          display: flex;
          align-items: center;

          svg {
            margin-right: 4px;
          }

          &.time {
            font-weight: bold;
          }
        }
      }
    }

    div.actions {
      ul {
        margin: 0 10px;
        border-top: 1px solid #afafaf;

        li {
          display: flex;
          padding: 12px 0;
          color: #004276;
          cursor: pointer;

          &.bold {
            font-weight: bold;
          }

          &:hover {
            text-decoration: underline;
          }

          &:first-child {
            margin-top: 30px;
          }
        }
      }
    }
  }
`;
