/*
Aluno e matrícula
Complete corretamente a coleção de objetos do código mostrado a seguir:

- A coleção deve ter três objetos;
- O objeto deve possuir campos aluno e matricula (nessa ordem);
- Os objetos devem ser criados com os valores e ordem abaixo;
- Valores textuais (aluno) devem estar dentro de aspas simples;
- Valores numéricos (matrícula) não devem estar entre aspas.
_____________________________________
Aluno: John
Matricula: 117

Aluno: Kelly
Matricula: 87

Aluno: Samuel
Matricula: 34
_____________________________________

*/

import entradaDados from "readline-sync";

let alunos = [
  { aluno: "John", matricula: 117 },
  { aluno: "Kelly", matricula: 87 },
  { aluno: "Samuel", matricula: 34 },
];

let indice = entradaDados.question("Digite o indice do objeto desejado: ");

console.log("Nome: " + alunos[indice].aluno);
console.log("Matrícula: " + alunos[indice].matricula);
