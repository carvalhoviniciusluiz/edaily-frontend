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

  opacity: ${props => (props.past ? 0.6 : 1)};

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

export const PanelBody = styled.div`
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

    svg {
      margin-right: 5px;
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
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  strong {
    font-size: 18px;
    font-weight: normal;
  }

  span {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 18px;
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
  color: #333;
  font-size: 18px;
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${darken(0.03, '#3b9eff')};
    color: #fff;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;
