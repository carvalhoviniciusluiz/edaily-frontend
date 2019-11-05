import styled from 'styled-components';

export const Lockscreen = styled.div`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 662px) {
    padding: 0 10px;
    padding-bottom: 2em;
  }
`;

export const Modal = styled.div`
  background: #fff;
  width: ${props => (props.width ? `${props.width}px` : '650px')};
  height: ${props => (props.height ? `${props.height}px` : '350px')};
  margin: 0 auto;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
