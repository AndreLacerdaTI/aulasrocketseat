// cleatTimeout vai rodar uma função depois de X milissegundos limpando um timeOut

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)