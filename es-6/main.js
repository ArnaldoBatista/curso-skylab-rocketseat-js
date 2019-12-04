//verificando se o usuário é administrador ou não
class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());// false
console.log(Adm1.isAdmin()); // true


//utilizando os métodos de array (map, reduce, filter e find)
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Utilizando o map
const idades = usuarios.map(usuario_x => usuario_x.idade);
console.log(idades);

//Utilizando o filter
const user_rocketseat_18 = usuarios.filter(usuario_x => usuario_x.idade >= 18 && usuario_x.empresa === 'Rocketseat');
console.log(user_rocketseat_18);

//Utilizando o find
const usuario_x = usuarios.find(usuario_x => usuario_x.empresa == 'Google');
console.log(usuario_x);

//multiplicando e filtrando a idade
const idade_mult = usuarios.map(usuario_x => ({ ...usuario_x, idade: usuario_x.idade * 2 })).filter(usuario_x => usuario_x.idade <= 50);
console.log(idade_mult);


//tranformando funções em arrow functions
const arr = [1, 2, 3, 4, 5];
const v_arr = arr.map(item => item + 10);
console.log(v_arr);

const usuario = { nome: 'Diego', idade: 23 };
const usuario_idade = usuario => usuario.idade; 
console.log(usuario_idade(usuario));

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise);

//Desestruturação simples
const empresa = {
    nome_emp: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const { nome_emp, endereco: {cidade, estado} } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//Desestruturação em parâmetros
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//Utilizando o operador de rest/spread
const arr_app = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr_app;
console.log(x);
console.log(y);

const usuario_app = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario_app, nome: 'Gabriel' };
console.log(usuario2);

const usuario3 = { ...usuario_app, cidade: 'Lontras' };
console.log(usuario3);

//utilizando Template Literals
const usuario_tem = 'Diego';
const idade_tem = 23;
console.log(`O usuário ${usuario_tem} possui  ${idade_tem} anos`);

//Object Short Syntax
const nome_us = 'Diego';
const idade_us = 23;
const usuario_us = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
console.log(usuario_us);

   


   
   



