import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;
  color: #fff;
  background: #90caf9;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .actions {
    display: flex;
    align-items: center;
    margin-left: 30px;

    h2 {
      font-weight: 444;
      font-weight: 555;
    }

    button {
      font-size: 22px;
      padding: 5px 12px;
      border: 0;
      background: transparent;
      margin-right: 15px;
      color: #fff;

      &:hover {
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
      }
    }

    @media (max-width: 882px) {
      h2 {
        font-size: 18px;
      }
      button {
        font-size: 24px;
        margin-right: 5px;
      }
    }
  }

  & > button {
    border: 0;
    background: transparent;
    text-transform: uppercase;
    font-weight: 555;
    padding: 10px;
    margin-right: 15px;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      color: #fff;
    }
  }

  @media (max-width: 882px) {
    & > button {
      font-size: 16px;
    }
  }
`;
