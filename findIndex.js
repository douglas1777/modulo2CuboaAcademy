const carros = [
  { nome: "Etios", marca: "Toyota", ano: 2010, cor: "preta" },
  { nome: "Gol", marca: "WolksWagem", ano: 2010, cor: "branca" },
  { nome: "Monza", marca: "GM", ano: 2010, cor: "cinza" },
  { nome: "Golf", marca: "WolksWagen", ano: 2010, cor: "vermelha" },
];
const resultado = carros.findIndex((carro) => {
  return carro.nome === "Monza";
});
console.log(resultado);
