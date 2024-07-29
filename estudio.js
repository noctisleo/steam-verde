const prompt = require("prompt-sync")();

let ultimoId = 1; // variavel global que guarda qual será o proximo id a ser atribuido ao registro

const estudios = [];

const validarIndice = (indice) => indice >= 0 && indice < estudios.length;

const modelo = (id) => { // id = undefined para criar um novo registro
  const nome = prompt("Nome do estudio: ");
  const pais_origem = prompt("Pais de origem: ");
  const ano_criacao = prompt("Ano de criação: ");

  if (
    nome != "" &&
    pais_origem != "" &&
    ano_criacao >= 1962 &&
    ano_criacao <= 2024
  ) {
    let estudio;
    if (id == undefined) { // id = undefined para criar um novo registro
      estudio = {
        nome,
        pais_origem,
        ano_criacao,
        id: ultimoId,
      };
      ultimoId++;
    } else { // se caso for informado um id, ou seja, para atualizar
      estudio = {
        nome,
        pais_origem,
        ano_criacao,
        id,
      };
    }
    return estudio;
  } else {
    console.log("Dados inválidos");
  }
};

const criar = () => {
  const estudio = modelo();

  if (estudio != undefined) {
    estudios.push(estudio);
    console.log("estudio cadastrado com sucesso");
  }
};

const listar = () => {
  if (estudios.length == 0) {
    console.log("Nenhum estudio encontrado");
    return false;
  } else {
    estudios.forEach((estudio) => {
      // Não é mais utilizado o indice para mostrar um identificador para o usuário e sim o id
      console.log(`
                ${estudio.id}.
                ${estudio.nome}, ${estudio.pais_origem}, ${estudio.ano_criacao}
                `);
    });

    return true;
  }
};

const atualizar = () => {
  if (!listar()) {
    return;
  }

  const id = prompt("Qual o id que deseja atualizar? ");

  const estudioNovo = modelo(id);

  if (estudioNovo != undefined) {
    // percorrendo o array de estudios
    estudios.forEach((estudio, indice) => {
      if (estudio.id == id) { // se o id informado for igual ao id do registro, é nesse registro que ocorrerá a atualização/substituição
        estudios[indice] = estudioNovo;
      }
    });

    console.log("estudio atualizado com sucesso");
  } else {
    console.log("Falha na atualização");
  }
};

const remover = () => {
  if (!listar()) {
    return;
  }

  const id = prompt("Qual id você deseja remover? ");

  // percorrendo o array de estudios
  estudios.forEach((estudio, indice) => {
    if (estudio.id == id) { // se o id informado for igual ao id do registro, é nesse registro que ocorrerá a remoção
      estudios.splice(indice, 1);
      console.log("estudio removido com sucesso");
    }
  });
};

module.exports = {
  criar,
  atualizar,
  listar,
  remover,
};