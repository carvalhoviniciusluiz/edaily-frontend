import styled from 'styled-components';

export const Navigation = styled.header`
  display: flex;
  justify-content: center;
`;

export const NavigationContent = styled.div`
  input[type='text'] {
    border: 0;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    max-width: 60px;
    text-align: center;
  }

  strong,
  input {
    color: #fff;
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
