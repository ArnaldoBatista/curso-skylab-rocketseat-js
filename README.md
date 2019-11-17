# Curso skylab rocketseat javascript.

### Módulo 1 exercicios.

1. Crie uma função que dado o objeto a seguir:  
var endereco = {  rua: "Rua dos pinheiros",  numero: 1293,  bairro: "Centro",  cidade: "São Paulo",  uf: "SP"};  
Retorne o seguinte conteúdo: O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" comnº 1293.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_1.html#L13).  

2. Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:  
function pares(x, y)  
{  // código aqui}  
pares(32, 321);  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_1.html#L30).  

3. Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"e retorna um booleano true/false caso exista ou não.  
function temHabilidade(skills)  
{  // código aqui}var skills = ["Javascript", "ReactJS", "React Native"];temHabilidade(skills);  
// true ou false  
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_1.html#L42).  

4. Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:  
function experiencia(anos) {    
// código aqui}  
var anosEstudo = 7;  
experiencia(anosEstudo);  
// De 0-1 ano: Iniciante  
// De 1-3 anos: Intermediário  
// De 3-6 anos: Avançado  
// De 7 acima: Jedi Master  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_1.html#L54).  

5. Dado o seguinte vetor de objetos:  
var usuarios = [  {    nome: "Diego",    habilidades: ["Javascript", "ReactJS", "Redux"]  },  {    nome: "Gabriel",    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  }];  
Escreva uma função que produza o seguinte resultado:O Diego possui as habilidades:  
Javascript, ReactJS, ReduxO Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir  
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um arraycom um separador utilize o join.

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_1.html#L72).  

### Módulo 2 exercicios.  

1. Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadradovermelho com 100px de altura e     largura. Sempre que o botão for clicado um novo quadrado deveaparecer na tela.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_2.html#L29).  

2. Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima dealgum quadrado troque sua cor   para uma cor aleatória gerada pela função abaixo:  
function getRandomColor() {  var letters = "0123456789ABCDEF";  var color = "#";  for (var i = 0; i < 6; i++) {    color +=   letters[Math.floor(Math.random() * 16)];  }  return color;}var newColor = getRandomColor(); // #E943F0  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_2.html#L20).  

3. A partir do seguinte vetor:  
var nomes = ["Diego", "Gabriel", "Lucas"];  
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:  
* Diego  
* Gabriel  
* Lucas  
  
[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_2.html#L48).  

4. Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:  
<input type="text" name="nome"><button onClick="adicionar()">Adicionar</button>  
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de  
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos demais itens anteriores.  
Além disso, o conteúdo do input deve ser apagado após o clique. 

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_2.html#L58).  

### Módulo 3 trabalhando com app.  

[Criando aplicação](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_3.html).  

[Renderizando elementos](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_3.html#L20).  

[Criando elementos](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_3.html#L46).  

[Excluindo elementos](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_3.html#L56).

[Salvando no storage](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_3.html#L62).  

### Módulo 4 exercicios.  

1. Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos deidade o resultado deve cair no .then, caso contrário, no .catch    function checaIdade(idade)  
{  // Retornar uma promise}  
checaIdade(20)  
.then(function() { console.log("Maior que 18"); })  
.catch(function() { console.log("Menor que 18"); });  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_4.html#L66).  

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
[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_4.html#L85).  

3. A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:  
```<li>Carregando...</li>```  
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.  
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.  

[resolução](https://github.com/ArnaldoBatista/curso-skylab-rocketseat-js/blob/master/modulo_4.html#L112).
