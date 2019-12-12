import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;
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

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
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

export const AsideContent = styled.aside.attrs({
  className: 'aside-content',
})`
  header {
    margin: 20px;

    div.pagination {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 882px) {
        margin-top: 20px;
      }

      margin-top: 90px;
      border-top: 1px solid rgba(34, 34, 48, 0.1);
      border-bottom: 1px solid rgba(34, 34, 48, 0.1);

      button {
        border: 0;
        background: transparent;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        input[type='text'] {
          width: 52px;
          color: #333;
          border: 1px solid #eee;
          border-radius: 5px;
          padding: 5px 10px;
          margin: 8px;
          font-size: 14px;
          text-align: center;
        }
      }
    }

    div.header {
      display: flex;
      flex-direction: column;

      margin-top: 20px;

      h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        cursor: help;
      }

      div {
        display: flex;
        justify-content: space-between;

        &.spread {
          margin-top: 20px;
        }
      }
    }

    div.actions {
      ul {
        margin-top: 20px;
        border-top: 1px solid rgba(34, 34, 48, 0.1);

        li {
          padding: 12px 0;
          color: #004276;
          cursor: pointer;

          &.bold {
            font-weight: bold;
          }

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
