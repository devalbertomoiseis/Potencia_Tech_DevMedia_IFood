/*
  1 - Funções são blocos de códigos que executam alguma tarefa;
  2 - As funções são úteis pois permitem que o código possa ser
  reaproveitado em uma aplicação;
  3 - Vamos comparar um código que usa funções e outro que não usa;
  4 -  Usar funções facilita a manutenção do código, pois qualquer alteração é feita em um único lugar. Sem funções precisamos fazer alterações em vários lugares, dificultando a manutenção da aplicação.
*/

// Exemplo de função que retorna a soma de dois números:

function soma(numero_1, numero_2){
  return numero_1 + numero_2;
}
let resultado = soma(5,2);
console.log(resultado)

/*
  Para calcular a médida de dois(ou mais) alunos, sem usar uma função,
  precisamos replica o código que faz o cálculo dessa média
*/ 
function calcular_media(nota_1, nota_2){
  let media = (nota_1 + nota_2) / 2;
  let status;
  if(media >= 6){
    status = `Aluno aprovado com média ${media}.`;
  }else{
    status = `Aluno reprovado com média ${media}.`
  }
}








