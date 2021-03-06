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
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.canceled ? 0.6 : 1)};
  cursor: ${props => (props.canceled ? 'not-allowed' : 'auto')};

  & + li {
    margin-top: 15px;
  }

  @media (max-width: 662px) {
    margin: 0 10px;

    p {
      width: inherit !important;
    }

    div strong {
      span span {
        display: none;
      }
    }
  }
`;

const defineColor = props => {
  if (props.canceled) return '#f27474';
  if (props.forwarded) return '#006dd5';
  return '#666';
};

export const FlagPanel = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    display: flex;
    align-items: center;
    color: ${props => defineColor(props)};

    font-weight: normal;

    span span {
      margin-left: 5px;
    }

    svg {
      margin-right: 5px;
    }
  }

  @media (max-width: 352px) {
    strong.date {
      display: none;
    }
  }
  @media (max-width: 276px) {
    strong.current-date {
      display: none;
    }
  }
  @media (max-width: 256px) {
    strong.event-author {
      display: none;
    }
  }
  @media (max-width: 180px) {
    strong.author {
      display: none;
    }
  }
`;

export const PanelActions = styled.div.attrs({
  className: 'actions',
})`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ActionTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  strong {
    font-weight: normal;
    font-size: 18px;
    margin-right: 15px;
    color: ${props => defineColor(props)};
  }

  span {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: ${props => defineColor(props)};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 446px) {
    span,
    strong {
      font-size: 12px;
    }

    strong {
      font-weight: bold;
      margin-right: 15px;
    }
  }
`;

export const BtnAction = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  color: ${props => defineColor(props)};
  cursor: pointer;

  &:hover {
    color: #fff;
    background: ${darken(0.03, '#006dd5')};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;
