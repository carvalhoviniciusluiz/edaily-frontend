import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Scope } from '@rocketseat/unform';

import { createOrganizationRequest } from '~/store/modules/organization/actions';

import logo from '~/assets/logo.svg';
import history from '~/services/history';
import { Wrapper, Content, Address, Title, SubstituteCard } from './styles';

import * as fetch from '~/services/fetch';

import schema from './validation';
// import initialFormData from './data';

export default function PrivateCompany() {
  const [substitute, setSubstitute] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [unautorized, setUnautorized] = useState(false);

  // const [data] = useState(initialFormData);

  const handleOpenPanel = () => setSubstitute(true);
  const handleClosePanel = () => setSubstitute(false);

  const dispatch = useDispatch();

  function handleSubmit(formData) {
    if (unautorized) {
      history.push('/register');
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

  async function fetchAddress(zipcode, prefix) {
    if (zipcode) {
      const { street, neighborhood, city, state } = await fetch.viacep(zipcode);

      document.getElementById(`${prefix}.street`).value = street;
      document.getElementById(`${prefix}.neighborhood`).value = neighborhood;
      document.getElementById(`${prefix}.city`).value = city;
      document.getElementById(`${prefix}.state`).value = state;
    }
  }

  const handleResponsibleAddress = async e =>
    fetchAddress(e.target.value, 'responsible');

  const handleCompanyAddress = async e =>
    fetchAddress(e.target.value, 'company');

  const handleSubstituteAddress = async e =>
    fetchAddress(e.target.value, 'substitute');

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Edaily" />

        <Form
          schema={schema(substitute)}
          onSubmit={handleSubmit}
          // initialData={data}
        >
          <Title>Representante Legal</Title>
          <Address>
            <div>
              <h3>Dados pessoais</h3>
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
                <Input
                  name="zipcode"
                  label="CEP"
                  onBlur={handleResponsibleAddress}
                />
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
                    <Input
                      name="zipcode"
                      label="CEP"
                      onBlur={handleSubstituteAddress}
                    />
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

          <Title>Entidade Governamental</Title>
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
                <Input
                  name="zipcode"
                  label="CEP"
                  onBlur={handleCompanyAddress}
                />
                <Input name="street" label="Logradouro" />
                <Input name="street_number" label="Número" />
                <Input name="neighborhood" label="Bairro" />
                <Input name="city" label="Cidade" />
                <Input name="state" label="Estado" />
              </Scope>
            </div>
          </Address>

          <label htmlFor="terms-authorized">
            <input
              id="terms-authorized"
              name="terms"
              type="checkbox"
              onChange={() => setTermsAccepted(!termsAccepted)}
              checked={termsAccepted}
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
