import { darken } from 'polished';
import styled from 'styled-components';

export const Fullname = styled.strong`
  font-weight: normal;
  font-size: 18px;
  color: #333;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const Email = styled.span`
  font-size: 12px;
  color: #666;
`;

export const PanelList = styled.ul`
  max-width: 800px;
  margin: 50px auto;
`;

export const Panel = styled.li`
  padding: 20px;
  margin: 20px;
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

    div {
      strong {
        span {
          span {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 448px) {
    div {
      strong.responsable {
        display: none;
      }
    }
    div.actions {
      p {
        a {
          display: none !important;
        }
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

    svg {
      margin-right: 5px;
    }
  }
`;

export const PanelAction = styled.div.attrs({
  className: 'actions',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const PanelInfo = styled.p`
  display: flex;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  strong {
    font-size: 18px;
    margin-right: 28px;
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
`;

export const BtnHistory = styled.span`
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

  svg {
    margin-right: 5px;
  }
`;
