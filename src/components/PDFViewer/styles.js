import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const NotFound = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const TextBox = styled.div`
  cursor: pointer;
  background: #686868;
  padding: 30px;
  border-radius: 4px;
  border: 4px solid;
  text-align: center;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 30px;
    margin-bottom: 15px;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    font-size: 20px;
  }
`;

export const TryAgain = styled.div`
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Lockscreen = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 1em;
  overflow-x: hidden;
  background: rgba(42, 42, 42, 0.7);

  display: flex;
  flex-direction: column;

  .react-pdf__Document {
    position: relative;
    width: 100%;

    padding-top: 1em;
    padding-bottom: 3em;
    background: transparent;

    display: flex;
    flex-direction: column;

    .react-pdf__Page {
      position: relative;
      margin: 0 auto 3em auto;
      padding: 0;
      overflow: visible;
      background-clip: content-box;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.54);
      background-color: white;
    }

    .react-pdf__Page__textContent,
    .react-pdf__Page__annotations {
      display: none;
    }
  }
`;
