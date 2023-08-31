let number = 2;
// stateful function
function square() {
    return number * number
}

number = square()

// stateless function
// não armazena nenhum dado
const square = n => n * n;