import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
`;

export const ListPanel = styled.ul`
  margin-top: 30px;

  li:last-child {
    margin-bottom: 100px;
  }
`;

export const Panel = styled.li.attrs({
  className: 'with-shading',
})`
  padding: 26px 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  & + li {
    margin-top: 15px;
  }

  @media (max-width: 662px) {
    margin: 0 10px;

    div strong {
      span span {
        display: none;
      }
    }
  }
`;

export const FlagPanel = styled.div`
  display: flex;
  justify-content: space-between;

  strong.time {
    font-size: 24px;
  }

  strong {
    display: flex;
    align-items: center;
    color: #666;

    font-weight: normal;

    span span {
      margin-left: 5px;
    }
  }
`;

export const PanelActions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    padding: 8px;
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);
    }
  }
`;

export const ActionTitle = styled.p`
  width: 425px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-top: 15px;

  strong {
    font-size: 28px;
    margin-right: 28px;
    font-weight: normal;
  }

  a {
    color: #333;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BtnCancel = styled.button.attrs({
  type: 'button',
  className: 'cancel',
})`
  background-color: #aaa;
  color: #fff;

  &:hover {
    background: ${darken(0.03, '#aaa')};
  }
`;

export const BtnSend = styled.button.attrs({
  type: 'button',
  className: 'send',
})`
  background-color: #3085d6;
  color: #fff;

  &:hover {
    background: ${darken(0.03, '#3085d6')};
  }
`;
