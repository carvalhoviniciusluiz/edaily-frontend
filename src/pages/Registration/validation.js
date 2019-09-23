import * as Yup from 'yup';

export default function schema(substitute = false) {
  const rules = {
    responsible: Yup.object().shape({
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
    }),
    company: Yup.object().shape({
      name: Yup.string().required('O razão social é obrigatório'),
      initials: Yup.string().required('O nome fantasia é obrigatório'),
      billing_email: Yup.string()
        .email('Insira um e-mail de cobrança válido.')
        .required('O e-mail de cobrança é obrigatório'),
      cnpj: Yup.string().required('O CNPJ é obrigatório'),
      phone1: Yup.string().required('O telefone comercial - 1 é obrigatório'),
      zipcode: Yup.string().required('O CEP é obrigatório'),
      street: Yup.string().required('O logradouro é obrigatório'),
      street_number: Yup.string().required('O número é obrigatório'),
      neighborhood: Yup.string().required('O bairro é obrigatório'),
      city: Yup.string().required('A cidade é obrigatório'),
      state: Yup.string().required('O estado é obrigatório'),
    }),
  };

  const complementaryRules = substitute
    ? {
        substitute: Yup.object().shape({
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
        }),
      }
    : {};

  return Yup.object().shape({ ...rules, ...complementaryRules });
}
