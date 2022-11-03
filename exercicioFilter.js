const professores = [
  { nome: "Guido", stack: "backend" },
  { nome: "Vidal", stack: "backend" },
  { nome: "Dani", stack: "frontend" },
  { nome: "Diego", stack: "frontend" },
  { nome: "Leo", stack: "backend" },
  { nome: "Ruli", stack: "frontend" },
];
const professorBack = professores.filter((professor) => {
  return professor.stack === "backend";
});
const professorFront = professores.filter((professor) => {
  return professor.stack === "frontend";
});
console.log(professorBack, professorFront);
