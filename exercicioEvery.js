const users = [
  { nome: "Junior", idade: 22 },
  { nome: "Idelcio", idade: 74 },
  { nome: "Lucimary", idade: 33 },
  { nome: "Miguel", idade: 18 },
];
const fiscalizarFesta = (arrayObj) => {
  const resultado = arrayObj.every((objeto) => {
    return objeto.idade >= 18;
  });
  if (resultado) {
    console.log("Festa liberada!");
  } else {
    console.log("Possui menor de idade!");
  }
};
fiscalizarFesta(users);
