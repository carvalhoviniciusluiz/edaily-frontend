import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 0 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  height: 64px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;

      cursor: pointer;
    }

    a {
      display: flex;
      font-weight: bold;
      color: #333;

      svg {
        margin-right: 13px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;
    margin-top: 5px;

    strong {
      display: block;
      color: #333;
    }

    span {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  @media (max-width: 768px) {
    div {
      display: none;
    }
  }

  canvas,
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid #599bc1;
    background: #eee;
  }
`;
