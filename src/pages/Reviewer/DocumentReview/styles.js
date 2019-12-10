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

  & > h2 {
    font-weight: 444;
    font-weight: 555;
    margin-left: 30px;
  }

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

export const Container = styled.div``;
