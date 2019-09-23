import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './styles';

export default function GovernmentEntity() {
  return (
    <Wrapper>
      <Content>
        <p>Em desenvolvimento</p>

        <Link to="/">Voltar ao login</Link>
      </Content>
    </Wrapper>
  );
}
