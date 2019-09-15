import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  height: 64px;
  margin: 0 auto;

  display: flex;
  -webkit-box-pack: center;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #599bc1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
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

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
