export async function viacep(zipcode) {
  const code = zipcode.replace(/(\d{5})(\d{3})/, '$1-$2');

  return fetch(`https://viacep.com.br/ws/${code}/json/`)
    .then(response => response.json())
    .then(data => ({
      zipcode: data.cep,
      street: data.logradouro,
      complement: data.complemento,
      street_number: '',
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    }));
}
