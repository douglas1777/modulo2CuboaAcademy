// //testa se pelo menos um elemento é verdadeiro
// const letras = ["a", "b", "c"];
// console.log(
//   letras.some((elementoAtual) => {
//     return elementoAtual === "d";
//   })
// );
const nomes = ["Douglas", "Lu", "Miguel"];
const numeros = [0, 1, 2, 3, 4, 5];

const funcaoCallback = (nome) => {
  return nome === "Douglas";
};
// const resultado = nomes.some(funcaoCallback);
const resultado = numeros.some((numero) => {
  return numero % 2 === 0;
});
console.log(resultado);
