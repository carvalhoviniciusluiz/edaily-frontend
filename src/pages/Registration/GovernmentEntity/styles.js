import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(-90deg, #152357, #599bc1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 50px;
  background: #fff;
  border-radius: 4px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;

  a {
    font-size: 14px;
    color: #333;
    text-decoration: underline;
  }
`;
