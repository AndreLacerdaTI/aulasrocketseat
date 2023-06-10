// Comentarios

/*
Comentarios em bloco
*/

//Strings

console.log('Andre');
console.log('An"d"re');
console.log("An'd're");
console.log(`
adada 
${1+1}`);

// Numeros

console.log(12.5 === Infinity) // Será falso pois 12.5 não é infinito
console.log(12.5 + 5) // Vai somar
console.log(12.5 / "a") // Aparecerá NaN (Not a number) 

// Booleans

console.log(false)
console.log(true)

// Undefined e null

console.log(null)
console.log(undefined)

// Objeto
// Abertura com {}
console.log({
    nome: "Andre",
    idade: 23,
    andar: function(){
      console.log('andar')
    }
  })
  
// Array
// Abertura com []
console.log([
    "Leite",
    "Ovos",
    2,
    1
])

// Tipos de variaveis
// Escopo define a visibilidade de alguma variavel
// Variaveis são globais e podem ser acessadas de fora de um escopo de bloco

var clima = "Quente";
clima = "frio";
console.log(clima);

const climaconst = "Quente";

let clima2 = 5;
console.log(typeof clima2)
clima2 = "";
console.log(typeof clima2)
clima2 = true;
console.log(typeof clima2)


//hoisting

/* Ao declarar uma variavel depois da sua aplicação no codigo, 
o compilador irá fazer o hoisting, ou seja, vai entender que sua variavel
existe porém ela terá valor undefined
Exemplo:
*/

console.log('> existe x antes do bloco?',x)
{
  var x = 0 
}
console.log('> existe x depois do bloco?',x)

// let e variaveis locais
// const e let são variaveis locais e são acessadas pelos blocos onde estão declaradas
/*
- Ao declarar uma let dentro das {chaves} essa let será local, 
portanto só poderá ser acessada dentro das chaves
- Se declararmos uma let antes das {chaves} podemos acessar 
ela dentro do escopo
- Podemos declarar uma let para fora e outra para dentro do 
escopo com o mesmo nome
Exemplo:
*/

let y = 1;
{
  let y = 0 
  console.log('Acessando o Y de dentro',y)
}
console.log('Acessando o Y de fora',y)

/*
- O mesmo vale para constantes, podemos declarar uma const no inicio e acessar 
o valor de dentro de um escopo e também podemos declarar duas const com o mesmo 
nome para blocos diferentes
*/

// Nomes de variaveis

/*
Aceita:
- Iniciar com caracteres especiais, ex: $, _
- Letras maiusculas e minusculas
- Acentos, ex: Á, á
OBS: a variavel de nome "UmaVariavel" é diferente da "umavariavel",
letras maiusculas e minusculas são diferenciadas pela linguagem

Não aceita:
- Iniciar a variavel com numeros
- Espaços vazios no nome da variavel

As boas praticas para variaveis são:
- Colocar nomes autoexplicativos em quem entendemos do que se trata a variavel
- Usar as letras maiusculas ou o underline para separar palavras, ex:
"umaVariavel" ou "uma_variavel"
*/

// Declarações simples
i = 0
i = "zero"
console.log(i)

// Declarações agrupadas sem definição de tipo
let name, age, isHuman

name = "Andre"
age = 18
isHuman = true
console.log(name, age, isHuman)

// Concatenar texto + variaveis
console.log('o '+ name +' tem ' + age + ' anos.')

// Interpolar valores com templates literals or template strings
console.log(`o ${name} tem ${age} anos.`)


// Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos`)

// Array

const animals = [
    'Lion',
    'Monkey',
    'Cat'
  ]
  console.log(animals[1])
  
  // Acessando valor dentro de um index no array
  const animals2 = [
    'Lion',
    'Monkey',
    {
      name: 'cat',
      age: 3
    }
  ]
  console.log(animals2[2].name)


// ---------------------------------------------------------------------
// REVISAO

// Exercicios

// Declarar uma variavel
let weight
// Exibir o tipo da variavel
console.log(typeof weight)

// Declarar e atribuir valores diferentes
let name2 = "Andre"
let age2 = 23
let stars = 4.8
let isSubscribed = true

// Descobrir tipo de dado de uma variavel
let student = {};
console.log(typeof student)

// Atribuindo propriedas para o objeto

let student2 = {
  name: "Andre",
  age: 23,
  stars: 4.8,
  isSubscribed: true
};

// Concatenando e printando objeto
console.log(`${student2.name} de idade ${student2.age} tem ${student2.stars} estrelas`)

// Declarar um array
students = []

// Atribuindo um objeto dentro de um array

students = [
  student2
]
console.log(students)

// Printando apenas a posição 0 do array
console.log(students[0])

// Criando uma constante e colocando na posição 1 do array
const john = {
  name: "John",
  age: 23,
  weight: 74.8,
  isSubscribe: true,
}

students = [
  student2,
  john
]

console.log(students)

// OU

students[1]= john
console.log(students)



