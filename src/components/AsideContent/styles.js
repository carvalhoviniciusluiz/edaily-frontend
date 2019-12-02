import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & > input[type='checkbox'],
  .hamburger {
    position: fixed;
    right: 30px;
    top: 85px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  & > input[type='checkbox'] {
    position: fixed;
    z-index: 100000;
    opacity: 0;
    cursor: pointer;
  }

  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 100001;
    background: #222;
    pointer-events: none;
  }

  & > ul {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 50px 20px;
    box-sizing: border-box;
    width: 300px;
    height: 100vh;
    background: #000;
    transition: 0.5s;
    z-index: 100000;
    overflow-y: auto;

    li {
      list-style: none;

      a {
        display: block;
        color: #fff;
        padding: 10px;
        box-sizing: border-box;
        text-decoration: none;
        font-size: 24px;
        font-weight: 700;
        transition: 0.5s;

        &:hover,
        &.active {
          transform: translateX(10px);
          color: #ff0;
        }
      }
    }
  }

  & > input[type='checkbox']:checked ~ ul {
    left: -300px;
  }

  @media (max-width: 882px) {
    & > input[type='checkbox'],
    .hamburger {
      border-radius: 0;
      width: 100%;
      top: 91%;
      right: 0;
      height: 66px;
    }

    & > ul {
      width: 100%;
      left: 0;
    }

    & > input[type='checkbox']:checked ~ ul {
      left: -100%;
    }

    & > input[type='checkbox'] {
      z-index: 100001;
      outline: none;
    }
  }
`;
