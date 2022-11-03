const num = [1, 2, 3, 4, 5, 3, 3, 37, 6, 8, 5, 4, 1, 2];
const resultadoNumeros = num.filter((numero) => {
  return numero == 3;
});
console.log(resultadoNumeros);
const carros = [
  { nome: "Etios", marca: "Toyota", ano: 2010, cor: "preta" },
  { nome: "Gol", marca: "WolksWagem", ano: 2010, cor: "branca" },
  { nome: "Monza", marca: "GM", ano: 2010, cor: "cinza" },
  { nome: "Golf", marca: "WolksWagem", ano: 2010, cor: "vermelha" },
];
const resultado = carros.filter((carro) => {
  return carro.marca === "WolksWagem";
});
console.log(resultado);
