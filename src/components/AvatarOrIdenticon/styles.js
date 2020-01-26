import identicon from 'react-identicons';

import styled from 'styled-components';

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  canvas,
  img {
    width: 120px;
    height: 120px;
    border-radius: 4px;
    border: 1px solid #eee;
    background: #eee;
  }
`;

export const Identicon = styled(identicon)``;
