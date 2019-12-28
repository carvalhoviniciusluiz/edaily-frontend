import { darken } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Title = styled.h4`
  font-size: 24px;
  color: #333;
  margin-bottom: 6px;
  text-transform: uppercase;
`;

export const Info = styled.small`
  font-size: 14px;
  color: #666;

  &.last {
    margin-bottom: 40px;
  }
`;

export const Navigation = styled.header`
  display: flex;
  justify-content: center;
`;

export const NavigationContent = styled.div`
  input[type='text'] {
    border: 0;
    border-radius: 4px;
    max-width: 60px;
    font-weight: bold;
    text-align: center;
  }

  strong,
  input {
    color: #333;
    font-size: 24px;
    margin: 10px;
  }
`;

export const BtnNavigation = styled.button.attrs(props => ({
  disabled: props.desable,
}))`
  border: 0;
  background: none;

  opacity: ${props => (props.desable ? 0.2 : 1)};
`;

export const PanelList = styled.ul`
  max-width: 800px;
  margin: 50px auto;
`;

export const PanelInfo = styled.strong`
  display: flex;
  align-items: center;
  color: #666;

  font-weight: normal;

  span {
    span {
      margin-left: 5px;
    }
  }

  svg {
    margin-right: 5px;
  }

  @media (max-width: 767px) {
    &.date,
    &.time {
      display: none;
    }
  }

  @media (max-width: 633px) {
    &.creator,
    &.revisor {
      display: none;
    }
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 633px) {
    justify-content: flex-start;
  }
`;

export const Panel = styled.li.attrs(() => ({
  className: 'with-shading',
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  & + li {
    margin-top: 15px;
  }
`;

export const PanelAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 10px;

  svg {
    &:hover {
      background: #fcffe2;
      cursor: pointer;
    }
  }
`;

export const PanelBody = styled.div`
  width: 800px;

  @media (max-width: 784px) {
    width: 600px;
  }

  @media (max-width: 722px) {
    width: 550px;
  }

  @media (max-width: 633px) {
    width: 400px;
  }
`;

export const PanelEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  strong {
    font-size: 18px;
    margin-right: 28px;
    font-weight: normal;
    width: 370px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (max-width: 633px) {
    strong {
      width: 300px;
    }
  }

  @media (max-width: 412px) {
    strong {
      width: 200px;
    }
  }

  button {
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
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
`;

export const PanelEventActions = styled.div`
  display: flex;

  @media (max-width: 668px) {
    span {
      display: none;
    }
  }

  @media (max-width: 633px) {
    display: none;
  }
`;

export const BtnActive = styled.button.attrs(() => ({
  className: 'btn-active',
}))`
  &:hover {
    color: #fff;
    background: ${darken(0.03, '#3b9eff')};
  }
`;

export const BtnInactive = styled.button.attrs(() => ({
  className: 'btn-inactive',
}))`
  &:hover {
    color: #fff;
    background: ${darken(0.03, '#aaa')};
  }
`;

export const BtnEdit = styled.button.attrs(() => ({
  className: 'btn-edit',
}))`
  &:hover {
    color: #333;
    background: ${darken(0.03, '#fff')};
  }
`;
