import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Scope } from '@rocketseat/unform';

import { createOrganizationRequest } from '~/store/modules/organization/actions';

import logo from '~/assets/logo.svg';
import history from '~/services/history';
import { Wrapper, Content, Address, Title, SubstituteCard } from './styles';

import schema from './validation';
// import initialFormData from './data';

export default function PrivateCompanyRegistration() {
  const [substitute, setSubstitute] = useState(false);
  const [sendingAuthorized, setSendingAuthorized] = useState(false);
  const [billingAuthorized, setBillingAuthorized] = useState(false);
  const [termsAuthorized, setTermsAuthorized] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // const [data] = useState(initialFormData);

  const dispatch = useDispatch();

  function handleSubmit(formData) {
    if (disabled) {
      history.push('/register');
      return;
    }

    dispatch(createOrganizationRequest(formData));
  }

  function handleOpenPanel() {
    setSubstitute(true);
  }

  function handleClosePanel() {
    setSubstitute(false);
  }

  useEffect(() => {
    setDisabled(!(sendingAuthorized && billingAuthorized && termsAuthorized));
  }, [billingAuthorized, sendingAuthorized, termsAuthorized]);

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Edaily" />

        <Form
          schema={schema(substitute)}
          onSubmit={handleSubmit}
          // initialData={data}
        >
          <Title>Dados do responsável</Title>
          <Address>
            <div>
              <h3>Informações pessoais</h3>
              <Scope path="responsible">
                <Input name="firstname" label="Nome" />
                <Input name="lastname" label="Ultimo nome" />
                <Input name="email" label="E-mail" />
                <Input name="cpf" label="CPF" />
                <Input name="rg" label="RG" />
                <Input name="phone" label="Celular" />
              </Scope>
            </div>
            <div>
              <h3>Endereço</h3>
              <Scope path="responsible">
                <Input name="zipcode" label="CEP" />
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
              <Title>Dados do usuário suplente</Title>
              <Address>
                <div>
                  <h3>Informações pessoais</h3>
                  <Scope path="substitute">
                    <Input name="firstname" label="Nome" />
                    <Input name="lastname" label="Ultimo nome" />
                    <Input name="email" label="E-mail" />
                    <Input name="cpf" label="CPF" />
                    <Input name="rg" label="RG" />
                    <Input name="phone" label="Celular" />
                  </Scope>
                </div>
                <div>
                  <h3>Endereço</h3>
                  <Scope path="substitute">
                    <Input name="zipcode" label="CEP" />
                    <Input name="street" label="Logradouro" />
                    <Input name="street_number" label="Número" />
                    <Input name="neighborhood" label="Bairro" />
                    <Input name="city" label="Cidade" />
                    <Input name="state" label="Estado" />
                  </Scope>
                </div>
              </Address>

              <strong>
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

          <Title>Dados da empresa</Title>
          <Address>
            <div>
              <h3>Informações</h3>
              <Scope path="company">
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
              <Scope path="company">
                <Input name="zipcode" label="CEP" />
                <Input name="street" label="Logradouro" />
                <Input name="street_number" label="Número" />
                <Input name="neighborhood" label="Bairro" />
                <Input name="city" label="Cidade" />
                <Input name="state" label="Estado" />
              </Scope>
            </div>
          </Address>

          <label htmlFor="sending-authorized">
            <input
              id="sending-authorized"
              name="sending"
              type="checkbox"
              onChange={() => setSendingAuthorized(!sendingAuthorized)}
              checked={sendingAuthorized}
            />
            <span>Autorizo comunicação da Imprensa Oficial por e-mail</span>
          </label>

          <label htmlFor="billing-authorized">
            <input
              id="billing-authorized"
              name="billing"
              type="checkbox"
              onChange={() => setBillingAuthorized(!billingAuthorized)}
              checked={billingAuthorized}
            />
            <span>Autorizo receber boletos de cobrança por e-mail</span>
          </label>

          <label htmlFor="terms-authorized">
            <input
              id="terms-authorized"
              name="terms"
              type="checkbox"
              onChange={() => setTermsAuthorized(!termsAuthorized)}
              checked={termsAuthorized}
            />
            <span>
              Concordo com os <a href="#terms">termos de uso</a> e as{' '}
              <a href="#security">politícas de segurança</a> desse sistema
            </span>
          </label>

          <button type="submit" disabled={disabled}>
            Criar conta
          </button>

          <Link to="/">Voltar ao login</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
