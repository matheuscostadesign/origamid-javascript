// Variaveis:
// Responsaveis por guardar dados na memória
// Evitam repetições

var nome = "Matheus";
var idade = 26;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

var sobrenome = "Costa",
  cidade = "São José do Rio Preto";
console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

// Nomes de variáveis validos
var camelCase;
var $selecionar; // padrão de nome jQuery
var _nome;

// Hoisting
// São movidas para cima do código, porém o valor atribuido não é movido

console.log(usuario);
var usuario = "Matheus Costa";
// Retorna undefined

var profissao = "Dev Frontned";
console.log(profissao);
// Retorna Dev Frontend

// Exercícios

// 1. Declarar uma variável com o seu nome
var nomeUsuario = "Matheus Costa dos Santos";

// 2. Declarar uma variavel com sua idade
var idadeUsuario = 26;

// 3. Declarar uma variável com a sua comida favorita e não atribuir valor
var comidaFavorita;

// 4. Atribuir valor a sua comida favorita
comidaFavorita = "Churrasco";

// 5. Declarar 5 variáveis diferentes sem valores
var rg, cpf, sexo, estadoCivil, dataNascimento;

console.log(nomeUsuario, idadeUsuario, comidaFavorita);
