// Se criarmos uma funcao auto executavel, precisamos usar o ";" para o js não retornar erro
/*
let number = 1;

(function(){
    console.log('alo')
})()
*/

// Operador binario
/*
let number = 1
console.log(number + 1)
*/

// Operador unario
let number = 1
console.log(++number)
//console.log(--number)
//console.log(typeof number)

// Operador ternario
console.log(true ? 'verdadeiro' : 'falso')
//console.log(false ? 'verdadeiro' : 'falso')

// New
/*
let name = new String('Andre')
name.surName = "Lacerda"
let age = new Number(23)
console.log(name.surName, age)

let date = new Date('2020-12-01')
console.log(date)
//console.log(date.__proto__)

// Typeof e delete

const person = {
    name:'Andre',
    age: 25,
}
delete person.age
console.log(person)
*/
// Operadores aritiméticos

// Multiplicação
console.log(3.2 * 5.5)
// Divisão
console.log(12 / 2)
// Soma
console.log(34 + 67)
// Subtração
console.log(34 - 23)

// Resto da divisão
let remainder
remainder = 11 % 3
console.log(remainder)

// Incremento
let increment = 0
increment++
console.log(increment)
// O increment no console log pode incrementar antes ou depois
console.log(increment++) // Incrementando depois de executar o console.log
console.log(increment)
console.log(++increment) // Incrementando antes 
console.log(increment)

// Decrement
let decrement = 0
console.log(--decrement) // Antes
console.log(decrement--) // Depois

// Exponencial
console.log(2 ** 3)

// Grouping operator ()
let total = (2+3)*5
console.log(total)

// Comparação de operadores
let one = 1
let two = 2
// Igual a
console.log( two == 1)
console.log( one == "1")
// Diferente de
console.log( one != two)
console.log( one != '1')
console.log( one != 1)

// Estritamente igual a
console.log( one === "1") // Retorna false pois o tipo é diferente
console.log( one === 1) // Retorna true pois o valor e tipo é igual
// Estritamente diferente de
console.log( two !== "2") // Retorna true pois "2" é diferente de 2
console.log( two !== 2) // Retorna false pois 2 é igual a 2

// Maior que
console.log(one > two)
// Menor que
console.log(one < two)
// Maior ou igual
console.log(one >= two)
// Menor ou igual
console.log(one <= two)

// Atribuição - assignment
let x
x=1
console.log(x)
// Atribuição adicional
// x = x + 2
x += 2
// Subtração
x -= 1
// Divisão
x /= 2
// Multiplicação
x *= 2

console.log(x)

// Condições AND, OR e NOT

let pao = true
let queijo = true

// AND &&
//console.log(pao && queijo)

// OR ||
//console.log(pao || queijo)

// NOT !
//console.log(!pao)

//Operador condicional Ternario

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18
let age = 18
const canDrive = age >= 18 ? 'can Drive' : "can't drive"
console.log(canDrive)

// Operador de String (String Operator)

// Comparison (Comparação)
//console.log('a' == 'a')

// Concatenação concatenation
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')

// Type conversion x Type coersion

//console.log(Number('9') + 5)

// FALSY
// Alguns valores se forem colocados no lugar onde era para se ter um bool o js vai entender como falso
// Ex: 0, NaN, null, undefined, ""
// console.log( true ? 'verdadeiro': 'falso') // verdadeiro
//console.log( 0 ? 'verdadeiro': 'falso') // falso
//console.log( NaN ? 'verdadeiro': 'falso') // falso
//console.log( null ? 'verdadeiro': 'falso') // falso
//console.log( undefined ? 'verdadeiro': 'falso') // falso
//console.log( "" ? 'verdadeiro': 'falso') // falso


// TRUTHY
// Os valores que o js entende como verdadeiro
// true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity
//console.log( "0" ? 'verdadeiro': 'falso') // verdadeiro

// Operador precedence
/*
grouping                         ()
negação e incremento             ! ++ --
multiplicação e divisão          * /
adição e subtração               + -
relacional                       < <= > >=c
igualdade                        == != === !==
AND                              &&
OR                               ||
condicional                      ?:
assignment                       = += -= *=
*/

//console.log(2+5*10)
console.log(3 > 2 && 2 > 1)


// Control flow

console.log('lavar o copo')
console.log('servir café')

// IF ELSE
/*
let temperatura = 36.5

if(temperatura >= 37.5){
    console.log("Febre alta")
} else if(temperatura < 37.5 && temperatura >= 37){
    console.log("Febre moderada")
} else{
    console.log('Saudavel')
}
*/

// Boas praticas IF ELSE
// Colocar a estrutura em blocos para identificarmos facilmente em qual if estamos
// Usar variaveis para receber os valores e depois usalas nas condições

let temperatura = 36.9
let highTemperature = temperatura >= 37.5
let mediumTemperature = temperatura < 37.5 && temperatura >= 37

if(highTemperature){
    console.log("Febre alta")
} else if(mediumTemperature){
    console.log("Febre moderada")
} else{
    console.log('Saudavel')
}

// Switch
// Usar sempre o break para o switch não percorrer o restante dos casos

let expression = 'b'
switch (expression){
    case 'a':
        // codigo
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log("Default")
        break
}

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))

// Throw

// try.. catch
// Usamos o try e catch nós identificamos os erros sem que isso pare a aplicação
// Ao usarmos o throw ele vai "lançar" o erro e ele será "capturado" pelo catch
// Isso evita da aplicação para por conta do erro
/*
function sayMyName(name){
    if (name === ''){
        throw 'Nome é obrigatorio'
    } else if(name =="Andre"){
        console.log("Olá "+name)
    } else{
        console.log('Olá ' + name)    
    }
    console.log('depois do throw') // Isso não será exibido porque o throw cancelou a função por conta do erro
}
try{
    sayMyName("") // Se deixarmos o nome vazio ele vai entrar no throw
} catch(e){
    console.log(e)
}
*/


// Estrutura de repetição

// FOR
for(let i =0; i < 10; i++){
    if(i===3){ // se o indice for igual a 3 ele vai pular essa execução e passar para o proximo indice
        continue; // Faz o loop ignorar o restante do codigo pulando pro proximo indice
    }
    if(i===7){
        break; // Faz o loop parar a execução
    }
    console.log(i)
}

// WHILE
// Geralmente usado quando não sabemos quando será finalizado
let i = 1000;
while(i > 10){
    console.log(i)
    i /= 10;
}

// FOR OF
console.log("\nFor of\n")
let name="Andre"
let names = ['João','Paulo','Pedro']

for(let char of name){
    console.log(char)
}
console.log("Segundo exemplo")
for(let name of names){ // O name usado é uma variavel local do for e não a variavel declarada anteriormente
    console.log(name)
}

// FOR IN
// Para percorrer um objeto
console.log("\nFor in\n")

let person = {
    name:'John',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property+":")
    console.log(person[property])
    //console.log(person.name)
    //console.log(person["name"])
}