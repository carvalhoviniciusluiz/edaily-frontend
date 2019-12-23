import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: #fff;
  }
`;

export const SectionList = styled.ul`
  width: 500px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  text-align: left;
  margin-bottom: 20px;
`;

export const SectionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;

  a {
    color: #333;
  }

  &:hover {
    background: #eee;
  }

  &:last-child {
    border-bottom: 0;
  }
`;
