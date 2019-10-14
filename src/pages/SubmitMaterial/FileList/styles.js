import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    div {
      display: flex;
      align-items: flex-start;
    }

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const FileActions = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 12px;
    color: #999;
    margin-top: 5px;

    button {
      border: 0;
      background: transparent;
      color: #e57878;
      margin-right: 5px;
      cursor: pointer;
    }
  }
`;
