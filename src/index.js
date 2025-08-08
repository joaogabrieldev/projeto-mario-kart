//- Combinar interação no terminal e Javascript para esse projeto

// console.log(process.argv[0]);
function valorAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(valorAleatorio(1, 6));

//? Lógica para gerar o valor do dado
const min = 1;
const max = 5;

const resultado = Math.floor(Math.random() * (max - min + 1));
console.log(resultado);
