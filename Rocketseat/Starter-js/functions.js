console.log('Explicando funções')
// function expression
// function anonymous
// Entre parenteses são parametros (parameters)
const sum = function(number1, number2){
    // Sempre usar a declaração com o tipo (var, let, const) e não somente o 
    // nome da variavel para evitar erros ao longo do codigo
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25


//sum(2,3) // Chamando a função e passando argumentos (arguments)

console.log(`a soma é ${sum(number1, number2)}`)
// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Explicando funções')
// ----------------------------------------------------------------------------------------
// Outra explicação para function

function fazerSuco(fruta1, fruta2){
    // Juntando os dois ingredientes
    return fruta1 + fruta2
}

// Passando os ingredientes
const copo = fazerSuco('banana', 'maçã')

console.log(copo)

// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Explicando function scope')
// ----------------------------------------------------------------------------------------

// function scope
// Exemplo 1 - sem parametro na função

let subject = 'subject variavel'
// Se não passar nenhum parametro ele vai puxar a variavel em outro escopo
function createThink(){
    subject = 'subject dentro func 1'
    return subject
}
console.log('Subject antes de chamar a função: ' + subject)
console.log('Subject chamando a função: ' + createThink(subject))
console.log('Subject depois de chamar a função: ' + subject)

console.log('Exemplo 2 -----------')
// Exemplo 2 - com parametro na função

let subject2 = 'subject2 variavel'
// Se passar parametro ele vai alterar apenas quando a função for chamada e depois a variavel volta a ter o valor incial
function createThink2(subject2){
    subject2 = 'subject2 dentro func 2'
    return subject2
}

console.log('Subject2 antes de chamar a função2: ' + subject2)
console.log('Subject2 chamando a função: ' + createThink2(subject2))
console.log('Subject2 depois de chamar a função2: ' + subject2)

console.log('Exemplo 3 -----------')
// Exemplo 3 - variavel sem valor antes da função
let varExemplo

function trocarValor(){
    varExemplo = 1
}
// Antes da função a variavel está sem valor
console.log('Antes da função: '+varExemplo)
// Chamando a função
trocarValor()
// Agora ela recebeu um valor mesmo depois de sair da função
console.log('Depois da função: '+varExemplo)

// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Explicando function hoisting')
// ----------------------------------------------------------------------------------------

// hoisting

// Devemos sempre declarar uma variavel ou função antes de chama-la
// Ao chamar uma variavel ou função não declarada pode gerar uma serie de erros
// As variaveis tendem a funcionar porque o compilador faz elevação das declarações
// Portanto na compilação ele irá ler todas as declarações do codigo e salvar em memoria para depois ler as funções

// Chamando a função sem a declaração
sayMyName()

// Declaração
function sayMyName(){
    console.log('hoisting Andre')
}

/*
// Se fosse uma const, var, let recebendo uma função ele iria dar erro
// Pois ele entende que sayMyName é uma variavel, porque ainda não foi declarado como função

sayMyName()
const sayMyName = function(){
    console.log('Andre')
}

*/
// Maneira certa de declarar uma variavel que recebe função
const sayMyNameC = function(){
    console.log('const Andre')
}
sayMyNameC()


var sayMyNameV = function(){
    console.log('var Andre')
}
sayMyNameV()

// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Explicando arrow function')
// ----------------------------------------------------------------------------------------
// arrow function

// Geralmente usado para const

const digaMeuNome = () => {
    console.log('Mayk')
}

digaMeuNome()

const digaMeuNome2 = (nome) => {
    console.log('Nome por atributos: ' + nome)
}

digaMeuNome2('Andre')

// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Explicando callback function')
// ----------------------------------------------------------------------------------------

// callback

// Você tronsformar o atributo em uma função
// Por exemplo vamos atribuir uma função para o atributo name

const callbackNome = (name) => {
    name()
}

callbackNome(
    () => {
        console.log('estou em uma callback')
    }
)

// É o mesmo que fazer:

function callbackNome2(){
    function name(){
        console.log('estou em uma callback 2')
    }
    name()
    console.log('depois de executar a callback')
}
callbackNome2()

// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Explicando function construtor')
// ----------------------------------------------------------------------------------------

// Contrutores

// Usar a primeira letra no nome da função é uma boa pratica

function Person(name){
    this.name = name
    this.walk = function(){
        return "andando"
    }
}

// Instanciar um novo objeto
const andre = new Person("Andre")
const joao = new Person("João")

// sem a função walk
//console.log(andre, joao)

// com a função walk
console.log(andre.walk, joao.walk)


// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Explicando Prototype ou __proto__')
// ----------------------------------------------------------------------------------------

// Prototype ou __proto__

// Todos os tipos de dados são tratados como objetos pelo js 
// Os dados possuem prototipos e propriedades trabalharmos com os valores
// Exemplo: 
// - "andre".lenght - ver a quantidade de caracteres temos na string
// - 23.0.toString - converter um numero em string
// - "Andre".__proto__ - acessar as informações dos dados/objeto

// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Typecoersion e typeconversion')
// ----------------------------------------------------------------------------------------

// Typecoersion - conversão forçada ou adaptada do js
console.log('9'+2)
// Typeconversion - conversão manual de um dado
console.log(Number('9')+2)

// ----------------------------------------------------------------------------------------
console.log('--------------------------------------')
console.log('Manipulando e convertendo dados')
// ----------------------------------------------------------------------------------------

// string -> number e number -> string
let string = "123"
console.log(Number(string))
let number = 123
console.log(String(number))

// length - string e number

let word = "Paralelepipedo"
console.log(word.length)

let numberLen = 1234
console.log(String(numberLen).length)

// Numeros quebrados separadados por "." em numeros separados por ","
let numberQuebrado = 435.213544
console.log(numberQuebrado.toFixed(2).replace(".",","))

// Letras minusculas em MAIUSCULAS
let frase = "Andre Lacerda Costa"
console.log(frase.toLowerCase().toUpperCase())
console.log(frase.toUpperCase().toLowerCase())

// Separando strings por espaços, caracteres, underline

let phrase = "Uma frase legal"
let myArray = phrase.split("a")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se existe uma palavra na frase
let phrase2 = "Uma frase muito legal"
console.log(phrase2.includes("muito"))

// Criar array com contrutor
let myArray2 = new Array('a','b','c')
let myArray10 = new Array(10)
console.log(myArray2)
console.log(myArray10)

// Contar elementos do array

console.log([
    "a",
    {type:"array"},
    function() {return "alo"},
].length)
//][1].type)
//][2]())

console.log(["a","b","c"].length)

// Transformar uma cadeia de caracteres em elementos de um array

let wordArray = "manipulação"
console.log(Array.from(wordArray))

// Manipulando Arrays

let techs = ["html","css","js"]

// Adicionar item no fim
techs.push("node.js")

// Adicionar no começo
techs.unshift("sql")

// Remover o item no final
techs.pop()

// Remover do começo
techs.shift()

// Pegar somente alguns elementos do Array
//console.log(techs.slice(1,3))

// Remover um ou mais itens em qualquer posição do array
//techs.splice(1,1)

// Encontrar a posição do elemento no array
//let index = techs.indexOf('css')

// Remover item especifico
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)