import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & > .input-change[type='checkbox'],
  .button-change {
    position: fixed;
    right: 30px;
    top: 150px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  & > .input-change[type='checkbox'] {
    position: fixed;
    z-index: 99999;
    opacity: 0;
    cursor: pointer;
  }

  .button-change {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 99999;
    background: #fff;
    border-top: 1px solid #eee;
    pointer-events: none;
  }

  & > .aside-content {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 !important;
    padding: 50px 20px;
    box-sizing: border-box;
    width: 300px;
    height: 100vh;
    background: #fff;
    transition: 0.5s;
    z-index: 9999;
    border-right: 1px solid rgba(34, 34, 48, 0.1);
  }

  & > .input-change[type='checkbox']:checked ~ .aside-content {
    left: -300px;
  }

  @media (max-width: 882px) {
    & > .input-change[type='checkbox'],
    .button-change {
      border-radius: 0;
      width: 100%;
      top: 82%;
      right: 0;
      height: 66px;
    }

    & > .input-change[type='checkbox']:checked ~ .aside-content {
      left: -100%;
    }

    & > .input-change[type='checkbox'] {
      z-index: 9999999;
      outline: none;
    }

    & > .aside-content {
      width: 100%;
      left: 0;
      overflow-y: auto;
      padding-bottom: 100px;
    }
  }
`;
