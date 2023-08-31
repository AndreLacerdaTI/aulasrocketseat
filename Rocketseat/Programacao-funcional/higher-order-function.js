// Higher-order function
// Funções que recebem funções como argumentos
// Funções que poderão retornar outras funções

// Exemplo com .map() JS

const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumber = numbers.map(square)

console.log(squaredNumber)

// Exemplo de um retorno de função
//(currying ou aplicação parcial de função)

// função pause recebe uma função wait que recebe uma função setTimeout()
const pause = wait => fn => setTimeout(fn, wait)

pause(600)( () => console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200( () => console.log('waiting 200ms'))
wait1000( () => console.log('waiting 1s'))