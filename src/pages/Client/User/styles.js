import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
`;

export const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => (props.length > 1 ? 2 : 1)}, 1fr);
  grid-gap: 15px;
  margin-top: 30px;
  margin-bottom: 50px;

  @media (max-width: 662px) {
    display: flex;
    flex-direction: column;

    margin: 0 10px;
    margin-top: 30px;

    li {
      & + li {
        margin-top: 15px;
      }
    }

    li:last-child {
      margin-bottom: 160px;
    }
  }
`;

export const UserPanel = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.inactive ? 0.6 : 1)};

  canvas,
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid ${props => (props.inactive ? '#f196ac' : '#599bc1')};
    background: #eee;
  }

  @media (max-width: 662px) {
    a {
      border-left: 1px solid #666;
      padding-left: 15px;
    }
  }
`;

export const PanelAction = styled.div.attrs({
  role: 'presentation',
})`
  text-transform: lowercase;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    strong {
      text-decoration: underline;
    }
  }

  strong {
    display: block;
    color: ${props => (props.inactive ? '#999' : '#666')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.inactive ? '#999' : '#666')};
  }
`;

export const BtnAdd = styled.button.attrs(() => ({
  type: 'button',
}))`
  position: fixed;
  bottom: 10%;
  right: 5%;
  padding: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    background: ${darken(0.03, '#f3f3f3')};
  }

  @media (max-width: 882px) {
    background: #fff;
    border-radius: 0;
    width: 100%;
    top: 82%;
    right: 0;
    height: 66px;
  }
`;
