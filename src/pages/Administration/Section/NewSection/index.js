/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import PageFullscreen from '~/components/PageFullscreen';
import { save, request } from '~/store/modules/client/user/actions';

import {
  Header,
  Title,
  BtnClose,
  Form,
  Divider,
  Label,
  Check,
  Input,
  BtnSubmit,
} from './styles';

export default function NewSection({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    is_active: Yup.string().required('O ultimo nome é obrigatório'),
    password: Yup.string().required('A senha é obrigatório'),
  });

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
        <Title>Cadastro de sessão</Title>
        <BtnClose onClick={() => setOpen(false)}>
          <MdClose size={22} />
        </BtnClose>
      </Header>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" label="Nome da sessão" />

        <Label>
          <Check name="is_active" />
          <span>Ativar sessão</span>
        </Label>

        <Divider />

        <Input
          type="password"
          name="password"
          label="Digite sua senha para confirmar a operação"
        />

        <BtnSubmit>Criar sessão</BtnSubmit>
      </Form>
    </PageFullscreen>
  );
}

NewSection.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
