const carros = [
  { nome: "Etios", marca: "Toyota", ano: 2010, cor: "preta" },
  { nome: "Gol", marca: "WolksWagem", ano: 2010, cor: "branca" },
  { nome: "Monza", marca: "GM", ano: 2010, cor: "cinza" },
  { nome: "Golf", marca: "WolksWagen", ano: 2010, cor: "vermelha" },
];
const buscaCarro = (marca, arrayCarros) => {
  const resultado = arrayCarros.find((carro) => {
    return carro.marca === marca;
  });
  console.log(resultado);
};
buscaCarro("Toyota", carros);
