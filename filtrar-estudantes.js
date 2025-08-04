const estudantes = require('./estudantes.json');

function filtraPorPropriedades(lista, propriedade) {
  return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propriedade);
  });
}

const listaEnderecosIncompletos = filtraPorPropriedades(estudantes, 'cep');
console.log(listaEnderecosIncompletos);
