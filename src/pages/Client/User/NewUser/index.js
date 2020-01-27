/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import PageFullscreen from '~/components/PageFullscreen';
import * as fetch from '~/services/fetch';
import { save, request } from '~/store/modules/client/user/actions';

import {
  Header,
  Title,
  BtnClose,
  Form,
  FormBody,
  FormGroup,
  FormAddon,
  Input,
  BtnSubmit,
} from './styles';

export default function NewUser({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const schema = Yup.object().shape({
    firstname: Yup.string().required('O nome é obrigatório'),
    lastname: Yup.string().required('O ultimo nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido.')
      .required('O e-mail é obrigatório'),
    cpf: Yup.string().required('O CPF é obrigatório'),
    rg: Yup.string().required('O RG é obrigatório'),
    phone: Yup.string().required('O celular é obrigatório'),
    zipcode: Yup.string().required('O CEP é obrigatório'),
    street: Yup.string().required('O logradouro é obrigatório'),
    street_number: Yup.string().required('O número é obrigatório'),
    neighborhood: Yup.string().required('O bairro é obrigatório'),
    city: Yup.string().required('A cidade é obrigatório'),
    state: Yup.string().required('O estado é obrigatório'),
  });

  const fetchAddress = async e => {
    const val = e.target.value;

    if (val) {
      const { street, neighborhood, city, state } = await fetch.viacep(
        val.replace('.', '')
      );

      document.getElementById('street').value = street;
      document.getElementById('neighborhood').value = neighborhood;
      document.getElementById('city').value = city;
      document.getElementById('state').value = state;
    }
  };

  const handleSubmit = async user => {
    await dispatch(save({ user, profile }));

    setTimeout(async () => {
      await dispatch(request({ page: 1, profile }));
    }, 1000);

    setOpen(false);
  };

  return (
    <PageFullscreen
      open={open}
      setOpen={setOpen}
      background="#f8f8f8"
      showActions={false}
    >
      <Header>
        <Title>Cadastro de usuário</Title>
        <BtnClose onClick={() => setOpen(false)}>
          <MdClose size={22} />
        </BtnClose>
      </Header>

      <Form schema={schema} onSubmit={handleSubmit}>
        <FormBody>
          <FormGroup>
            <h3>Dados pessoais</h3>
            <FormAddon>
              <Input name="firstname" label="Nome" />
            </FormAddon>
            <FormAddon>
              <Input name="lastname" label="Sobrenome" />
            </FormAddon>
            <FormAddon>
              <Input name="email" label="E-mail" />
            </FormAddon>
            <FormAddon>
              <Input name="cpf" label="CPF" />
            </FormAddon>
            <FormAddon>
              <Input name="rg" label="RG" />
            </FormAddon>
            <FormAddon>
              <Input name="phone" label="Celular" />
            </FormAddon>
          </FormGroup>

          <FormGroup>
            <h3>Endereço</h3>
            <FormAddon>
              <Input name="zipcode" label="CEP" onBlur={fetchAddress} />
            </FormAddon>
            <FormAddon>
              <Input name="street" label="Logradouro" />
            </FormAddon>
            <FormAddon>
              <Input name="street_number" label="Número" />
            </FormAddon>
            <FormAddon>
              <Input name="neighborhood" label="Bairro" />
            </FormAddon>
            <FormAddon>
              <Input name="city" label="Cidade" />
            </FormAddon>
            <FormAddon>
              <Input name="state" label="Estado" />
            </FormAddon>
          </FormGroup>
        </FormBody>

        <BtnSubmit>Criar conta</BtnSubmit>
      </Form>
    </PageFullscreen>
  );
}

NewUser.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
