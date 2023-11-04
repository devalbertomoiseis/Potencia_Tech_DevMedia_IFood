import input from "readline-sync";

let nome = input.question("Informe o nome do artista: ");
let musica = input.question("Informe a música: ");

let artista = {
  nome: nome,
  musica: musica,
};

console.log("Artista: " + artista.nome);
console.log("Música: " + artista.musica);
