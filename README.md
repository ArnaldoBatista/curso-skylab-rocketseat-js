# Curso skylab rocketseat javascript basico.

### Módulo 1 exercicios.

1. Crie uma função que dado o objeto a seguir:  
var endereco = {  rua: "Rua dos pinheiros",  numero: 1293,  bairro: "Centro",  cidade: "São Paulo",  uf: "SP"};  
Retorne o seguinte conteúdo: O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" comnº 1293.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_1.html#L13).  

2. Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:  
function pares(x, y)  
{  // código aqui}  
pares(32, 321);  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_1.html#L30).  

3. Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"e retorna um booleano true/false caso exista ou não.  
function temHabilidade(skills)  
{  // código aqui}var skills = ["Javascript", "ReactJS", "React Native"];temHabilidade(skills);  
// true ou false  
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_1.html#L42).  

4. Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:  
function experiencia(anos) {    
// código aqui}  
var anosEstudo = 7;  
experiencia(anosEstudo);  
// De 0-1 ano: Iniciante  
// De 1-3 anos: Intermediário  
// De 3-6 anos: Avançado  
// De 7 acima: Jedi Master  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_1.html#L54).  

5. Dado o seguinte vetor de objetos:  
var usuarios = [  {    nome: "Diego",    habilidades: ["Javascript", "ReactJS", "Redux"]  },  {    nome: "Gabriel",    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  }];  
Escreva uma função que produza o seguinte resultado:O Diego possui as habilidades:  
Javascript, ReactJS, ReduxO Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir  
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um arraycom um separador utilize o join.

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_1.html#L72).  

### Módulo 2 exercicios.  

1. Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadradovermelho com 100px de altura e     largura. Sempre que o botão for clicado um novo quadrado deveaparecer na tela.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_2.html#L29).  

2. Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima dealgum quadrado troque sua cor   para uma cor aleatória gerada pela função abaixo:  
function getRandomColor() {  var letters = "0123456789ABCDEF";  var color = "#";  for (var i = 0; i < 6; i++) {    color +=   letters[Math.floor(Math.random() * 16)];  }  return color;}var newColor = getRandomColor(); // #E943F0  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_2.html#L20).  

3. A partir do seguinte vetor:  
var nomes = ["Diego", "Gabriel", "Lucas"];  
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:  
* Diego  
* Gabriel  
* Lucas  
  
[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_2.html#L48).  

4. Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:  
<input type="text" name="nome"><button onClick="adicionar()">Adicionar</button>  
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de  
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos demais itens anteriores.  
Além disso, o conteúdo do input deve ser apagado após o clique. 

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_2.html#L58).  

### Módulo 3 trabalhando com app.  

[Criando aplicação](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_3.html).  

[Renderizando elementos](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_3.html#L20).  

[Criando elementos](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_3.html#L46).  

[Excluindo elementos](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_3.html#L56).

[Salvando no storage](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_3.html#L62).  

### Módulo 4 exercicios.  

1. Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos deidade o resultado deve cair no .then, caso contrário, no .catch    function checaIdade(idade)  
{  // Retornar uma promise}  
checaIdade(20)  
.then(function() { console.log("Maior que 18"); })  
.catch(function() { console.log("Menor que 18"); });  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_4.html#L66).  

2. Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar onome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conformeURL abaixo) os dados de repositórios do usuário e mostrá-los em tela:    URL de exemplo: https://api.github.com/users/diego3g/repos Basta alterar "diego3g" pelo nome do usuário.  
<input type="text" name="user"><button onclick="">Adicionar</button>  
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:  
```
<ul>  
<li>repo1</li>  
<li>repo2</li>  
<li>repo3</li>  
<li>repo4</li>  
<li>repo5</li>  
</ul>
```  
[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_4.html#L85).  

3. A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:  
```<li>Carregando...</li>```  
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.  
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/javascript-básico/modulo_4.html#L112).  

# Curso javascript ES6.  

### Módulo 1 exercicios.  

1. Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe. Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.  

const User1 = new Usuario('email@teste.com', 'senha123');  
const Adm1 = new Admin('email@teste.com', 'senha123');  
console.log(User1.isAdmin()) // false  
console.log(Adm1.isAdmin()) // true  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L1).  

2. A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):  

const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];  

2.1 Utilizando o map Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L33).  

2.2 Utilizando o filter Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L37).  

2.3 Utilizando o find Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L41).  

2.4 Unindo operações Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:  

// Resultado:  
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L45).  

3. Converta as funções nos seguintes trechos de código em Arrow Functions:  

const arr = [1, 2, 3, 4, 5];  
arr.map(function(item) {  
 return item + 10;  
});  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L51).  

// Dica: Utilize uma constante pra function  
const usuario = { nome: 'Diego', idade: 23 };  
function mostraIdade(usuario) {  
 return usuario.idade;  
}  
mostraIdade(usuario);  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L55).  

// Dica: Utilize uma constante pra function  
const nome = "Diego";  
const idade = 23;  
function mostraUsuario(nome = 'Diego', idade = 18) {  
 return { nome, idade };  
}  
mostraUsuario(nome, idade);  
mostraUsuario(nome);  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L59).  

const promise = function() {  
 return new Promise(function(resolve, reject) {  
 return resolve();  
 })  
}  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L65).  

4.1 Desestruturação simples A partir do seguinte objeto:  
const empresa = {  
 nome: 'Rocketseat',  
 endereco: {  
 cidade: 'Rio do Sul',  
 estado: 'SC',  
 }  
};  

Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:  
console.log(nome); // Rocketseat  
console.log(cidade); // Rio do Sul  
console.log(estado); // SC  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L68).  

4.2 Desestruturação em parâmetros Na seguinte função:  
function mostraInfo(usuario) {  
 return `${usuario.nome} tem ${usuario.idade} anos.`;  
}  
mostraInfo({ nome: 'Diego', idade: 23 })  

Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas:  
return `${nome} tem ${idade} anos.`;  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L82).  

5. Utilizando o operador de rest/spread (...) realize as seguintes operações:  

5.1 Rest. A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.  
console.log(x); // 1  
console.log(y); // [2, 3, 4, 5, 6]  
Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:  

// function soma...  
console.log(soma(1, 2, 3, 4, 5, 6)); // 21  
console.log(soma(1, 2)); // 3  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L89).  

5.2 Spread A partir do objeto e utilizando o operador spread:  
const usuario = {  
   nome: 'Diego',  
   idade: 23,  
   endereco: {  
   cidade: 'Rio do Sul',  
   uf: 'SC',  
   pais: 'Brasil',  
   }  
};  
Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.  
Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L94).  

6. Converta o seguinte trecho de código utilizando Template Literals:  
const usuario = 'Diego';  
const idade = 23;  
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L110).  

7. Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:  
const nome = 'Diego';  
const idade = 23;  
const usuario = {  
   nome: nome,  
   idade: idade,    
   cidade: 'Rio do Sul',  
};  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_1/main.js#L115).  

### Módulo 2 exercicios.  

1. Crie um arquivo chamado functions.js com o seguinte conteúdo:  
export const idade = 23;  
export default class Usuario {  
   static info() {  
   console.log('Apenas teste');  
   }  
}  

Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario e chame a funão info();  
Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;  
Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade para IdadeUsuario.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_2/src/main.js#L1).  

### Módulo 3 exercicios.  

1. Transforme os seguintes trechos de código utilizando async/await:  

// Funão delay aciona o .then após 1s  
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));  
function umPorSegundo() {  
   delay().then(() => {  
   console.log('1s');  
   delay().then(() => {  
   console.log('2s');  
   delay().then(() => {  
   console.log('3s');  
   });  
   })  
   });  
}  
umPorSegundo();  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_3/src/main.js#L1).  

import axios from 'axios';  
function getUserFromGithub(user) {  
   axios.get(`https://api.github.com/users/${user}`)  
   .then(response => {  
   console.log(response.data);  
   })  
   .catch(err => {  
   console.log('Usuário não existe');  
   })  
}  
getUserFromGithub('diego3g');  
getUserFromGithub('diego3g124123');  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_3/src/main.js#L9).  

class Github {  
   static getRepositories(repo) {  
   axios.get(`https://api.github.com/repos/${repo}`)  
   .then(response => {  
   console.log(response.data);  
   })  
   .catch(err => {  
   console.log('Repositório não existe');  
   })  
   }  
}  
Github.getRepositories('rocketseat/rocketseat.com.br');  
Github.getRepositories('rocketseat/dslkvmskv');  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_3/src/main.js#L22).  

const buscaUsuario = usuario => {  
   axios.get(`https://api.github.com/users/${user}`)  
   .then(response => {  
   console.log(response.data);  
   })  
   .catch(err => {  
   console.log('Usuário não existe');  
   });  
}  
buscaUsuario('diego3g');  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/es-6/modulo_3/src/main.js#L36).  







































