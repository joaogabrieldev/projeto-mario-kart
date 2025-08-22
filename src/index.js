import readline from "readline-sync";

// //? Classe Modelo
class Personagem {
  constructor(id, nome, velocidade, manobrabilidade, poder, pontos) {
    this.id = id;
    this.nome = nome;
    this.velocidade = velocidade;
    this.manobrabilidade = manobrabilidade;
    this.poder = poder;
    this.pontos = pontos;
  }
}

//? Objetos (Personagens)
const mario = new Personagem(1, "Mario", 4, 3, 3, 0);
const bowser = new Personagem(2, "Bowser", 5, 2, 5, 0);
const peach = new Personagem(3, "Peach", 3, 4, 2, 0);
const luigi = new Personagem(4, "Luigi", 3, 4, 4, 0);
const yoshi = new Personagem(5, "Yoshi", 2, 4, 3, 0);
const donkeyKong = new Personagem(6, "Donkey Kong", 2, 2, 5, 0);

const personagens = [mario, bowser, peach, luigi, yoshi, donkeyKong];

//? Gerar o valor do dado
async function rollDice() {
  const jogarDado = readline
    .question(`Digite [J] para jogar o dado e [N] para sair: \n`, {
      limit: /^[JjNn]$/i,
      limitMessage: "Apenas [J] ou [N], por favor",
    })
    .toLowerCase();

  if (jogarDado === "n") {
    console.log("\nPara iniciar o jogo novamente digite [npm run dev]\n");
    process.exit();
  }

  const min = 1;
  const max = 6;
  const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`\nVALOR DO DADO: ${resultado}`);
  return resultado;
}

//? Mostrar Atributos do Personagem Sorteado
async function AtributesView(player) {
  console.log(`\nPersonagem: ${player.nome.toUpperCase()}
    Atributos:
      Velocidade: ${player.velocidade}
      Manobrabilidade: ${player.manobrabilidade}
      Poder: ${player.poder}
    `);
}

//? 1º

//? Iniciar Jogo no Terminal
console.log("======= BEM-VINDO JOGADOR 🏎️ =======");
const continuarPrograma = readline
  .question("Digite [S] para continuar e [N] para sair: ", {
    limit: /^[sSnN]$/i,
    limitMessage: "Apenas [S] ou [N], por favor",
  })
  .toLowerCase();

if (continuarPrograma == "n") {
  console.log("\nPara iniciar o jogo novamente digite [npm run dev]\n");
  process.exit();
}

console.log("\nVAMOS INICIAR A CORRIDA🏁\n");

//? Sortear Personagem
function sortearID(array) {
  if (!array || array.length === 0) {
    return null;
  }

  const indiceSorteado = Math.floor(Math.random() * array.length);
  return array[indiceSorteado];
}

let player1;
let player2;

const sortearPlayer1 = readline
  .question("Digite [S] para sortear o Player 1 e [N] para sair: ", {
    limit: /^[SsNn]$/i,
    limitMessage: "Apenas [S] ou [N], por favor",
  })
  .toLowerCase();

if (sortearPlayer1 === "n") {
  console.log("\nPara iniciar o jogo novamente digite [npm run dev]\n");
  process.exit();
}

player1 = sortearID(personagens);
await AtributesView(player1);

const sortearPlayer2 = readline
  .question("Digite [S] para sortear o Player 2 e [N] para sair: ", {
    limit: /^[SsNn]$/i,
    limitMessage: "Apenas [S] ou [N], por favor",
  })
  .toLowerCase();

if (sortearPlayer2 === "n") {
  console.log("\nPara iniciar o jogo novamente digite [npm run dev]\n");
  process.exit();
}

player2 = sortearID(personagens);
await AtributesView(player2);

while (player1.id == player2.id) {
  console.log("Ops... sorteando de novo, vieram personagens iguais!");
  player2 = sortearID(personagens);
  await AtributesView(player2);
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;

    case random < 0.66:
      result = "CURVA";
      break;

    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

//? Function Chains
//'Motor do Jogo
async function playRaceEngine(character1, character2) {
  //? Tempo de espera pro FOR
  function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  setTimeout(async () => {
    for (let round = 1; round <= 5; round++) {
      console.log(`\n🏁 ${round}ª Rodada`);

      // Block Sort
      let block = await getRandomBlock();
      console.log(`Bloco: ${block}\n`);

      // Roll Dice
      let diceResult1 = await rollDice();
      let diceResult2 = await rollDice();

      // Hability Teste
      let TotalTestSkill1 = 0;
      let TotalTestSkill2 = 0;

      // block verifications
      if (block === "RETA") {
        TotalTestSkill1 = diceResult1 + character1.velocidade;
        await logRollResult(
          character1.nome,
          "Velocidade",
          diceResult1,
          character1.velocidade
        );
        TotalTestSkill2 = diceResult2 + character2.velocidade;
        await logRollResult(
          character2.nome,
          "Velocidade",
          diceResult2,
          character2.velocidade
        );

        if (TotalTestSkill1 > TotalTestSkill2) {
          console.log(`\n${character1.nome} VENCEU esta rodada!🏆`);
          character1.pontos++;
        } else {
          console.log(
            `\n${character2.nome} VENCEU esta rodada! e marcou um ponto🏆\n`
          );
          character2.pontos++;
        }
      }

      if (block === "CURVA") {
        TotalTestSkill1 = diceResult1 + character1.manobrabilidade;
        await logRollResult(
          character1.nome,
          "Manobrabilidade",
          diceResult1,
          character1.manobrabilidade
        );

        TotalTestSkill2 = diceResult2 + character2.manobrabilidade;
        await logRollResult(
          character2.nome,
          "Manobrabilidade",
          diceResult2,
          character2.manobrabilidade
        );

        if (TotalTestSkill1 > TotalTestSkill2) {
          console.log(
            `\n${character1.nome} VENCEU esta rodada! e marcou um ponto🏆`
          );
          character1.pontos++;
        } else {
          console.log(
            `\n${character2.nome} VENCEU esta rodada! e marcou um ponto🏆`
          );
          character2.pontos++;
        }
      }

      if (block === "CONFRONTO") {
        TotalTestSkill1 = diceResult1 + character1.poder;
        await logRollResult(
          character1.nome,
          "PODER",
          diceResult1,
          character1.poder
        );

        TotalTestSkill2 = diceResult2 + character2.poder;
        await logRollResult(
          character2.nome,
          "PODER",
          diceResult2,
          character2.poder
        );

        if (character1.pontos == 0) {
          character1.pontos = 0;
        } else {
          character1.pontos--;
        }

        if (character2.pontos == 0) {
          character2.pontos = 0;
        } else {
          character2.pontos--;
        }

        if (TotalTestSkill1 > TotalTestSkill2) {
          console.log(`\n${character1.nome} VENCEU esta rodada!🏆`);
        } else {
          console.log(`${character2.nome} VENCEU esta rodada!🏆\n`);
        }
      }

      await esperar(3000);
    }

    console.log("\n----------------------------");

    if (character1.pontos > character2.pontos) {
      console.log(`
      PONTUAÇÃO:
          
          ${character1.nome.toUpperCase()}: ${character1.pontos}🥇

          ${character2.nome.toUpperCase()}: ${character2.pontos}🥈 
        `);
      console.log(`\n${character1.nome.toUpperCase()} VENCEU A PARTIDA!🏆🥇\n`);
    } else if (character2.pontos > character1.pontos) {
      console.log(`
      PONTUAÇÃO:
          
      ${character1.nome.toUpperCase()}: ${character1.pontos}🥈 

      ${character2.nome.toUpperCase()}: ${character2.pontos}🥇 
      `);

      console.log(`\n${character2.nome.toUpperCase()} VENCEU A PARTIDA!🏆🥇\n`);
    } else if (character1.pontos == character2.pontos) {
      console.log(`
    PONTUAÇÃO:
          
      ${character1.nome.toUpperCase()}: ${character1.pontos}🥇

      ${character2.nome.toUpperCase()}: ${character2.pontos}🥇 
      `);

      console.log(
        `\n ${character1.nome.toUpperCase()} e ${character2.nome.toUpperCase()} EMPATARAM A PARTIDA!🏳️\n`
      );
    }
  }, 2000);
}
// console.log(player1.id, player2.id);

//? Funcão principal do Jogo (Auto Invoke Function)
(async function main(player1, player2) {
  console.log(
    `🏁🚨Iniciando corrida entre ${player1.nome.toUpperCase()} e ${player2.nome.toUpperCase()}🚨🏁\n`
  );

  await playRaceEngine(player1, player2);
})(player1, player2);
