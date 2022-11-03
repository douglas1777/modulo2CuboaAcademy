//testa se todos elementos passam no teste na funão callback

const frutas = ["abacaxi", "manga", "goiaba", "pera", "banana"];

const resultado = frutas.every((elemento) => {
  return elemento !== "bananaaa";
});
console.log(resultado);
