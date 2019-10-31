import styled from 'styled-components';

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
