import readline from "readline-sync";

// //? Classe Modelo
class Personagem {
  constructor(id, nome, velocidade, manobrabilidade, poder) {
    this.id = id;
    this.nome = nome;
    this.velocidade = velocidade;
    this.manobrabilidade = manobrabilidade;
    this.poder = poder;
  }
}

//? Objetos (Personagens)
const mario = new Personagem(1, "Mario", 4, 3, 3);
const bowser = new Personagem(2, "Bowser", 5, 2, 5);
const peach = new Personagem(3, "Peach", 3, 4, 2);
const luigi = new Personagem(4, "Luigi", 3, 4, 4);
const yoshi = new Personagem(5, "Yoshi", 2, 4, 3);
const donkeyKong = new Personagem(6, "Donkey Kong", 2, 2, 5);

const personagens = [mario, bowser, peach, luigi, yoshi, donkeyKong];

//? Gerar o valor do dado
async function rollDice() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//? Iniciar Jogo no Terminal
console.log("======= BEM-VINDO JOGADOR 🏎️ =======");
const continuarPrograma = readline
  .question("Digite [S] para continuar e [N] para sair: ", {
    limit: /^[sSnN]$/i,
    limitMessage: "Apenas [S] ou [N], por favor",
  })
  .toLowerCase();

if (continuarPrograma == "n") {
  console.log("Para iniciar o jogo novamente digite [npm run dev]");
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

let player1 = sortearID(personagens);
let player2 = sortearID(personagens);

while (player1.id == player2.id) {
  console.log("Ops... sorteando de novo, vieram personagens iguais!\n");
  player2 = sortearID(personagens);
}

// console.log(player1.id, player2.id);

//? Funcão principal do Jogo (Auto Invoke Function)
(async function main(player1, player2) {
  console.log(
    `🏁🚨Iniciando corrida entre ${player1.nome.toUpperCase()} e ${player2.nome.toUpperCase()}🚨🏁\n`
  );
})(player1, player2);
