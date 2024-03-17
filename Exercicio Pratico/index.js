const Aluno = require('./classes/aluno');
const Turma = require('./classes/turma');
const TurmaPresencial = require('./classes/turmaPresencial');

const aluno1 = new Aluno("João", "joao123", "123456");
const turma1 = new Turma("T1", 7); 
const turmaPresencial1 = new TurmaPresencial("T2", 8, 80); 

console.log(aluno1);
console.log(turma1.aprovado()); 
console.log(turmaPresencial1.aprovado()); 