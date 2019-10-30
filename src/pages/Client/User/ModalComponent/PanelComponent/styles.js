import styled from 'styled-components';

export const PaperFullScreen = styled.div`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: #fff;
  z-index: 99999;
`;

export const PanelClose = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;

  button {
    font-size: 24px;
    font-weight: 555;

    position: fixed;
    right: 30px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 4px;

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

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  img {
    height: 120px;
    width: 120px;
    border-radius: 4px;
  }

  strong {
    font-weight: normal;
    font-size: 18px;
    color: #333;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    color: #666;
  }
`;
