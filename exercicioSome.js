const extensao = [
  "baidu.exe",
  "street fighter.jar",
  "config.bin",
  "mar.jpg",
  "thor.mp4",
  "virus.bat",
];

// resultado = extensao.some((antiVirus) => {
//   return antiVirus === ".bat";
// });
// if (resultado) {
//   console.log("Vírus detectato");
// } else {
//   console.log("Nenhum vírus encontrado");
// }
const antiVirus = (arrayArquivos) => {
  const resultado = arrayArquivos.some((arquivo) => {
    const existeExtensao = arquivo.indexOf(".bat");
    return existeExtensao !== -1;
  });
  if (resultado) {
    console.log("Vírus detectado!");
  } else {
    console.log("Nenhum vírus encontrado!");
  }
};
antiVirus(extensao);
