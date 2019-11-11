import styled from 'styled-components';

export const PaperFullScreen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 150px;
  background: ${props => (props.background ? props.background : '#fff')};
  overflow-x: hidden;
  z-index: 99999;
`;

export const PaperActions = styled.div`
  display: ${props => (props.showActions ? 'flex' : 'none')};
  justify-content: flex-end;
  height: 40px;

  button {
    font-size: 24px;
    font-weight: 555;

    position: fixed;
    right: 30px;
    top: 15px;
    width: 50px;
    height: 50px;
    border-radius: 4px;

    background: transparent;
    color: #999;

    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 882px) {
      border: 0;
      right: 0;
      top: 0;
      font-weight: 700;
      opacity: 0.2;
      margin-top: 5px;
      margin-right: 10px;
      color: #222;

      width: 22px;
      height: 22px;
    }
  }
`;
