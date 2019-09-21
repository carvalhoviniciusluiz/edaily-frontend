import api from './api';

export async function viacep(zipcode) {
  const code = zipcode.replace(/(\d{5})(\d{3})/, '$1-$2');

  const res = await api.get(`https://viacep.com.br/ws/${code}/json/`);

  const { cep, logradouro, complemento, bairro, localidade, uf } = res.data;

  return {
    zipcode: cep,
    street: logradouro,
    complement: complemento,
    street_number: '',
    neighborhood: bairro,
    city: localidade,
    state: uf,
  };
}
