import styled from 'styled-components';
import { darken } from 'polished';

export const ServiceList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    li:first-child {
      margin-bottom: 15px;
    }
  }

  li {
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    width: 350px;

    &:hover {
      a {
        color: #fff;
      }
      background: ${darken(0.03, '#7159c1')};
    }

    a {
      display: flex;
      flex-direction: column;
      color: #333;

      svg {
        align-self: center;
      }

      > strong {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      > span {
        font-size: 16px;
        line-height: 20px;
        margin-top: 5px;
      }
    }
  }
`;
