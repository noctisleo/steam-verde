const prompt = require("prompt-sync")();

const jogos = [];

const criar = () => {
  const nome = prompt("Nome do jogo: ");
  const ano_lancamento = prompt("Ano de lançamento: ");
  const duracao = prompt("Duração média em horas: ");
  const preco = prompt("Preço: ");
  const estudio = prompt("Qual o estudio do jogo? ");
  const sequencia = prompt("Qual é a sequência do jogo? ");

  if (
    nome != "" &&
    ano_lancamento >= 1962 &&
    ano_lancamento <= 2024 &&
    duracao > 0 &&
    preco == 0 &&
    estudio != "" &&
    ((sequencia > 0 && sequencia < jogos.length) || jogos.length == 0)
  ) {
    jogos.push({
      nome,
      ano_lancamento,
      duracao,
      preco,
      estudio,
      sequencia,
    });

    console.log("Jogo cadastrado com sucesso");
  } else {
    console.log("Dados inválidos");
  }
};

const listar = () => {
    if(jogos.length == 0) {
        console.log("Nenhum jogo encontrado")
    } else {
        jogos.forEach((jogo, indice) => {
            console.log(`
                ${indice + 1}. 
                Nome: ${jogo.nome}
                Ano de Lancamento: ${jogo.ano_lancamento}
                Duração: ${jogo.duracao}
                Preço: ${jogo.preco}
                Estudio: ${jogo.estudio}
                Sequência: ${jogo.sequencia}
                `)
        })
    }
}