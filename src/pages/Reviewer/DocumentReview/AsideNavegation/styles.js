import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & > .input-review[type='checkbox'],
  .button-review {
    position: fixed;
    right: 30px;
    top: 150px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  & > .input-review[type='checkbox'] {
    position: fixed;
    z-index: 999999;
    opacity: 0;
    cursor: pointer;
  }

  .button-review {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999999;
    background: #fff;
    border-top: 1px solid #eee;
    pointer-events: none;
  }

  & > .aside-content {
    position: fixed;
    top: 64px;
    right: 0;
    width: 300px;
    height: 100vh;
    background: #fff;
    box-sizing: border-box;
    border-left: 1px solid rgba(34, 34, 48, 0.1);
    z-index: 999999;
  }

  @media (max-width: 882px) {
    & > .input-review[type='checkbox'],
    .button-review {
      border-radius: 0;
      width: 100%;
      top: 82%;
      right: 0;
      height: 66px;
      z-index: 9999999;
    }

    & > .input-review[type='checkbox']:checked ~ .aside-content {
      left: -100%;
    }

    & > .input-review[type='checkbox'] {
      z-index: 9999999;
      outline: none;
    }

    & > .aside-content {
      top: 65px;
      left: 0;
      width: 100%;
      transition: 0.5s;
      overflow-y: auto;
      padding-bottom: 200px;
    }
  }
`;
