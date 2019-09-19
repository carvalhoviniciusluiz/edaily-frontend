import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { createOrganizationRequest } from '~/store/modules/organization/actions';

import { Wrapper, Content, Address, Title, SubstituteCard } from './styles';

import initialFormData from './data';

const schema = Yup.object().shape({
  'customer.firstname': Yup.string().required('O nome é obrigatório'),
  'customer.lastname': Yup.string().required('O ultimo nome é obrigatório'),
  'customer.email': Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório'),
  'customer.cpf': Yup.string().required('O CPF é obrigatório'),
  'customer.rg': Yup.string().required('O RG é obrigatório'),
  'customer.phone': Yup.string().required('O celular é obrigatório'),
  'customer_address.zipcode': Yup.string().required('O CEP é obrigatório'),
  'customer_address.street': Yup.string().required(
    'O logradouro é obrigatório'
  ),
  'customer_address.street_number': Yup.string().required(
    'O número é obrigatório'
  ),
  'customer_address.neighborhood': Yup.string().required(
    'O bairro é obrigatório'
  ),
  'customer_address.city': Yup.string().required('A cidade é obrigatório'),
  'customer_address.state': Yup.string().required('O estado é obrigatório'),
  'substitute.firstname': Yup.string().required('O nome é obrigatório'),
  'substitute.lastname': Yup.string().required('O ultimo nome é obrigatório'),
  'substitute.email': Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório'),
  'substitute.cpf': Yup.string().required('O CPF é obrigatório'),
  'substitute.rg': Yup.string().required('O RG é obrigatório'),
  'substitute.phone': Yup.string().required('O celular é obrigatório'),
  'substitute_address.zipcode': Yup.string().required('O CEP é obrigatório'),
  'substitute_address.street': Yup.string().required(
    'O logradouro é obrigatório'
  ),
  'substitute_address.street_number': Yup.string().required(
    'O número é obrigatório'
  ),
  'substitute_address.neighborhood': Yup.string().required(
    'O bairro é obrigatório'
  ),
  'substitute_address.city': Yup.string().required('A cidade é obrigatório'),
  'substitute_address.state': Yup.string().required('O estado é obrigatório'),
  'company.name': Yup.string().required('O razão social é obrigatório'),
  'company.initials': Yup.string().required('O nome fantasia é obrigatório'),
  'company.billing_email': Yup.string()
    .email('Insira um e-mail de cobrança válido.')
    .required('O e-mail de cobrança é obrigatório'),
  'company.cnpj': Yup.string().required('O CNPJ é obrigatório'),
  'company.phone1': Yup.string().required(
    'O telefone comercial - 1 é obrigatório'
  ),
  'company_address.zipcode': Yup.string().required('O CEP é obrigatório'),
  'company_address.street': Yup.string().required('O logradouro é obrigatório'),
  'company_address.street_number': Yup.string().required(
    'O número é obrigatório'
  ),
  'company_address.neighborhood': Yup.string().required(
    'O bairro é obrigatório'
  ),
  'company_address.city': Yup.string().required('A cidade é obrigatório'),
  'company_address.state': Yup.string().required('O estado é obrigatório'),
});

export default function PrivateCompanyRegistration() {
  const [substitute, setSubstitute] = useState(false);
  const [data] = useState(initialFormData);

  const dispatch = useDispatch();

  function handleSubmit(formData) {
    dispatch(createOrganizationRequest(formData));
  }

  function handleOpenPanel() {
    setSubstitute(true);
  }

  function handleClosePanel() {
    setSubstitute(false);
  }

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Edaily" />

        <Form schema={schema} onSubmit={handleSubmit} initialData={data}>
          <Title>Dados do responsável</Title>
          <Address>
            <div>
              <h3>Informações pessoais</h3>
              <Scope path="customer">
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
              <Scope path="customer_address">
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
                  <Scope path="substitute_address">
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
              <Scope path="company_address">
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
            <input id="sending-authorized" name="sending" type="checkbox" />
            <span>Autorizo comunicação da Imprensa Oficial por e-mail</span>
          </label>

          <label htmlFor="billing-authorized">
            <input id="billing-authorized" name="billing" type="checkbox" />
            <span>Autorizo receber boletos de cobrança por e-mail</span>
          </label>

          <label htmlFor="terms-authorized">
            <input id="terms-authorized" name="terms" type="checkbox" />
            <span>
              Eu concordo e aceito os <a href="#terms">termos de uso</a> e as{' '}
              <a href="#security">politícas de segurança</a> para esse sistema.
            </span>
          </label>

          <button type="submit">Criar conta</button>

          <Link to="/">Voltar ao login</Link>
        </Form>
      </Content>
    </Wrapper>
  );
}
