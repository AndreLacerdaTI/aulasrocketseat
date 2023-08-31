// Função para printar Mayk

const sayMyName = () => console.log('Mayk')

// É uma função para rodar funções
// Ao chamar runFunction(nome da função)
const runFunction = fn => fn()
runFunction(sayMyName)

// runFunction chamando uma função de primeira classe
runFunction(() => console.log('discover'))

// Fazendo a função retornar um print
console.log(runFunction(Math.random))
