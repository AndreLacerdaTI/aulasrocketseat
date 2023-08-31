const random = (number, Math) => Math.floor(Math.random() * number);

// recursive
// Find the factorial of a number
const factorial = x => {
    // if number is 0
    if (x === 0){
        return 1;
    }
    return x * factorial(x - 1);
}

// Deverá ter ao menos 1 argumento
// Devera retornar algo
// Nada que acontecer la dentro afeta o mundo externo
// * Dados imutaveis
// * Não guardar estado
// Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma) como no exemplo