import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  position: relative;

  &:hover {
    opacity: 0.7;
  }
`;

export const FileContainer = styled.label.attrs({
  htmlFor: 'avatar',
})`
  cursor: pointer;

  canvas,
  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 5px solid #599bc1;
    background: #eee;
  }
`;

export const FileInput = styled.input.attrs({
  type: 'file',
  id: 'avatar',
  accept: 'image/png,image/jpg,image/jpeg',
})`
  display: none;
`;

export const LabelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  content: '';
  position: absolute;
  border-radius: 50%;
  background: #599bc1;
  color: #fff;
  right: 2px;
  top: 5px;
  width: 32px;
  height: 32px;
`;
