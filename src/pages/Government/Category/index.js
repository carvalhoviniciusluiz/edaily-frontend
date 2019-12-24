import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { setOrganizationType } from '~/store/modules/organization/actions';
import { Container, Title, SectionList, SectionItem } from './styles';
import { registration } from '~/routes/paths';

export default function Category() {
  const dispatch = useDispatch();

  const sections = [
    [
      'GABINETE DO GOVERNADOR',
      'SECRETARIAS ESTRAORDINÁRIAS',
      'ORGÃOS ESTRATÉGICOS DE EXECUÇÃO',
    ],
    [
      'AUTARQUIAS ESTADUAIS E ÓRGÃOS VINCULADOS',
      'FUNDAÇÕES ESTADUAIS',
      'SECRETARIAS DE ESTADO',
      'SERVIÇO SOCIAL AUTÔNOMO',
      'SOCIEDADE DE ECONOMIA MISTA',
      'SUPERINTENDÊNCIA DE VIGILÂNCIA EM SAÚDE',
    ],
  ];

  const handleSetItem = item => {
    dispatch(setOrganizationType(item));
  };

  return (
    <Container>
      <Title>Qual seu perfil de governo</Title>

      <SectionList>
        {sections.map(section =>
          section.map(item => (
            <SectionItem key={item} onClick={() => handleSetItem(item)}>
              <Link to={registration.government}>
                <MdKeyboardArrowRight />
                {item}
              </Link>
            </SectionItem>
          ))
        )}
      </SectionList>

      <Link to="/">Voltar ao login</Link>
    </Container>
  );
}
