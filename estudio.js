const prompt = require("prompt-sync")();

const estudios = [];

const validarIndice = (indice) => indice >= 0 && indice < estudios.length;

const modelo = () => {
  const nome = prompt("Nome do estudio: ");
  const pais_origem = prompt("Pais de origem: ");
  const ano_criacao = prompt("Ano de criação: ");

  if (
    nome != "" &&
    pais_origem != "" &&
    ano_criacao >= 1962 &&
    ano_criacao <= 2024
  ) {
    return {
      nome,
      pais_origem,
      ano_criacao,
    };
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
    estudios.forEach((estudio, indice) => {
      console.log(`
                ${indice + 1}. 
                ${estudio}
                `);
    });

    return true;
  }
};

const atualizar = () => {
  if (!listar()) {
    return;
  }

  const indice = prompt("Qual o indice que deseja atualizar? ") - 1;

  const estudio = modelo();

  if (estudio != undefined && validarIndice(indice)) {
    estudios[indice] = estudio;

    console.log("estudio atualizado com sucesso");
  } else {
    console.log("Falha na atualização");
  }
};

const remover = () => {
  if (!listar()) {
    return;
  }

  const indice = prompt("Qual indice você deseja remover? ") - 1;

  if (validarIndice(indice)) {
    estudios.splice(indice, 1);
    console.log("estudio removido com sucesso");
  } else {
    console.log("Falha na remoção");
  }
};
