import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 550px;
  margin: 0 auto;

  @media (max-width: 662px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  flex: 1;
  margin: 5px;
  background: #fff;
  text-align: center;
  font-size: 1.5em;

  border-radius: 4px;
  padding: 20px;

  a {
    color: #333;

    div {
      display: flex;
      justify-content: center;

      svg {
        margin-right: 10px;
      }

      @media (max-width: 377px) {
        svg {
          display: none;
        }
      }

      strong {
        font-size: 1.1em;
        font-weight: bold;
        margin: 5px 0 12px;
      }
    }

    span {
      font-size: 0.8em;
    }
  }

  &:hover {
    background: ${darken(0.03, '#7159c1')};

    a {
      color: #fff;
    }
  }
`;
