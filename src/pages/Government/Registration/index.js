/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { MdInfo } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input, Check, Scope } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';
import InputGroup from '~/components/Fields/InputGroup';
import { registration } from '~/routes/paths';
import * as fetch from '~/services/fetch';
import history from '~/services/history';
import { createOrganizationRequest } from '~/store/modules/organization/actions';

// import initialFormData from './data';
import {
  Wrapper,
  Content,
  Address,
  Legend,
  Title,
  SubstituteCard,
  Message,
  MessageBox,
} from './styles';
import schema from './validation';

export default function PrivateCompany() {
  const organizationType = useSelector(
    state => state.organization.organization_type
  );

  if (!organizationType) {
    history.push(registration.register);
  }

  const [substitute, setSubstitute] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [unautorized, setUnautorized] = useState(false);

  // const [data] = useState(initialFormData);

  const handleOpenPanel = () => setSubstitute(true);
  const handleClosePanel = () => setSubstitute(false);

  const dispatch = useDispatch();

  function handleSubmit(formData) {
    if (unautorized) {
      history.push(registration.register);
      return;
    }

    dispatch(
      createOrganizationRequest({
        ...formData,
        termsAccepted,
      })
    );
  }

  useEffect(() => {
    setUnautorized(!termsAccepted);
  }, [termsAccepted]);

  async function fetchAddress(e, prefix) {
    const zipcode = e.target.value;
    if (zipcode) {
      try {
        const { street, neighborhood, city, state } = await fetch.viacep(
          zipcode
        );

        document.getElementById(`${prefix}.street`).value = street;
        document.getElementById(`${prefix}.neighborhood`).value = neighborhood;
        document.getElementById(`${prefix}.city`).value = city;
        document.getElementById(`${prefix}.state`).value = state;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('[VIACEP]:.. T_T');
      }
    }
  }

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Edaily" />

        <Form
          schema={schema(substitute)}
          onSubmit={handleSubmit}
          // initialData={data}
        >
          <Title>{organizationType}</Title>

          <Legend>Entidade Governamental</Legend>
          <Address>
            <div>
              <h3>Informações</h3>
              <Scope path="organization">
                <Input name="name" label="Razão social" />
                <Input name="initials" label="Nome fantasia" />
                <Input name="billing_email" label="E-mail de cobrança" />
                <Input name="cnpj" label="CNPJ" />
                <Input name="phone1" label="Telefone comercial - 1" />
                <Input name="phone2" label="Telefone comercial - 2" />
              </Scope>
            </div>
            <div>
              <h3>Endereço</h3>
              <Scope path="organization">
                <Input
                  name="zipcode"
                  label="CEP"
                  onBlur={e => fetchAddress(e, 'organization')}
                />
                <Input name="street" label="Logradouro" />
                <Input name="street_number" label="Número" />
                <Input name="neighborhood" label="Bairro" />
                <Input name="city" label="Cidade" />
                <Input name="state" label="Estado" />
              </Scope>
            </div>
          </Address>

          <Legend>Representante Legal</Legend>

          <Message>
            <MessageBox>
              <li>
                <MdInfo size={14} />
                Todos os campos são obrigatórios
              </li>
              <li>
                <MdInfo size={14} />
                Clique na opção anexar para informar a imagem do documento
              </li>
            </MessageBox>
          </Message>

          <Address>
            <div>
              <h3>Dados pessoais</h3>
              <Scope path="responsible">
                <Input name="firstname" label="Nome" />
                <Input name="lastname" label="Ultimo nome" />
                <Input name="email" label="E-mail" />
                <InputGroup name="cpf" label="CPF" button-label="Anexar">
                  <button type="button">Anexar</button>
                </InputGroup>
                <InputGroup name="rg" label="RG" button-label="Anexar">
                  <button type="button">Anexar</button>
                </InputGroup>
                <Input name="phone" label="Celular" />
              </Scope>
            </div>
            <div>
              <h3>Endereço</h3>
              <Scope path="responsible">
                <InputGroup
                  name="zipcode"
                  label="CEP"
                  onBlur={e => fetchAddress(e, 'responsible')}
                >
                  <button type="button">Anexar</button>
                </InputGroup>
                <Input name="street" label="Logradouro" />
                <Input name="street_number" label="Número" />
                <Input name="neighborhood" label="Bairro" />
                <Input name="city" label="Cidade" />
                <Input name="state" label="Estado" />
              </Scope>
            </div>
          </Address>

          {substitute ? (
            <SubstituteCard>
              <Legend>Dados do usuário suplente</Legend>
              <Address>
                <div>
                  <h3>Informações pessoais</h3>
                  <Scope path="substitute">
                    <Input name="firstname" label="Nome" />
                    <Input name="lastname" label="Ultimo nome" />
                    <Input name="email" label="E-mail" />
                    <InputGroup name="cpf" label="CPF" button-label="Anexar">
                      <button type="button">Anexar</button>
                    </InputGroup>
                    <InputGroup name="rg" label="RG" button-label="Anexar">
                      <button type="button">Anexar</button>
                    </InputGroup>
                    <Input name="phone" label="Celular" />
                  </Scope>
                </div>
                <div>
                  <h3>Endereço</h3>
                  <Scope path="substitute">
                    <InputGroup
                      name="zipcode"
                      label="CEP"
                      onBlur={e => fetchAddress(e, 'substitute')}
                    >
                      <button type="button">Anexar</button>
                    </InputGroup>
                    <Input name="street" label="Logradouro" />
                    <Input name="street_number" label="Número" />
                    <Input name="neighborhood" label="Bairro" />
                    <Input name="city" label="Cidade" />
                    <Input name="state" label="Estado" />
                  </Scope>
                </div>
              </Address>

              <strong className="none">
                <span onClick={handleClosePanel} role="presentation">
                  Fechar
                </span>
              </strong>
            </SubstituteCard>
          ) : (
            <strong>
              <span onClick={handleOpenPanel} role="presentation">
                Adicionar um usuário suplente
              </span>
            </strong>
          )}

          <label htmlFor="organization.terms_accepted">
            <Check
              id="terms_accepted"
              name="terms_accepted"
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            <span>
              Concordo com os <a href="#terms">termos de uso</a> e as{' '}
              <a href="#security">politícas de segurança</a> desse sistema
            </span>
          </label>

          <button type="submit" disabled={unautorized}>
            Criar conta
          </button>

          <Link to="/">Voltar ao login</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
