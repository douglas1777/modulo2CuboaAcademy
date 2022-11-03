const professores = [
  { nome: "Guido", stack: "backend" },
  { nome: "Vidal", stack: "backend" },
  { nome: "Dani", stack: "frontend" },
  { nome: "Diego", stack: "frontend" },
  { nome: "Leo", stack: "backend" },
  { nome: "Ruli", stack: "frontend" },
];
const resultado = professores.findIndex((professor) => {
  return professor.stack === "backend";
});
console.log(resultado);
