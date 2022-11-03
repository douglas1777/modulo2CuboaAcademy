const numeros = [1, 2, 3, 4, 5, 6];
console.log(
  numeros.find((elemento) => {
    return elemento > 5;
  })
);
const usuarios = [
  { nome: "Livia", idade: 32 },
  { nome: "Julia", idade: 23 },
  { nome: "Pedro", idade: 21 },
  { nome: "Lucimary", idade: 18 },
  { nome: "José", idade: 24 },
  { nome: "Asno", idade: 38 },
];
const resultado = usuarios.find((usuario) => {
  return usuario.idade >= 30;
});
console.log(resultado);
