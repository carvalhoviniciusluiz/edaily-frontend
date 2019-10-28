import styled from 'styled-components';

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
