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

export const DocumentHistory = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: #fff;
  padding: 15px;
  border-right: 1px solid rgba(34, 34, 48, 0.1);

  h4 {
    font-size: 16px;
  }

  ul {
    margin-top: 20px !important;
    margin-left: 20px;

    li {
      display: flex;
      padding: 10px 0;

      div.timeline-figure {
        &:before {
          content: '';
          position: absolute;
          height: 80px;
          left: 44px;
          border-left: 2px solid rgba(34, 34, 48, 0.1);
          border-left-style: dashed;
        }

        span {
          position: relative;
          z-index: 99999;
        }
      }

      div.timeline-body {
        padding-left: 20px;

        h6 {
          font-size: 14px;
          font-weight: normal;
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;
        }

        span {
          font-size: 0.75rem;
          color: #888c9b;
        }
      }

      .check {
        display: flex;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f6f7f9;
        padding: 4px;
      }

      .success {
        color: #fff;
        background: #00a28a;
      }

      .warn {
        color: #fff;
        background: #f7c46c;
      }

      .error {
        color: #fff;
        background: #fb6f91;
      }

      .done {
        color: #eee;
        background: #eee;
      }
    }
  }
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
  cursor: pointer;

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
      margin: 0 122px 3em auto;
      padding: 0;
      overflow: visible;
      background-clip: content-box;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.54);
      background-color: white;
    }

    .react-pdf__Page__canvas {
      cursor: not-allowed;
    }

    .react-pdf__Page__textContent,
    .react-pdf__Page__annotations {
      display: none;
    }
  }
`;
