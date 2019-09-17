import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  position: relative;

  .fieldInput {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 2px;
    top: 5px;
    width: 32px;
    height: 32px;
    background: #599bc1;
    content: '';
    border-radius: 50%;
    color: #fff;
  }

  &:hover {
    opacity: 0.7;
  }

  label {
    cursor: pointer;

    canvas,
    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 5px solid #599bc1;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
