// Conceito de imutabilidade
// Exemplo JavaScript

const cart = {
    quantity: 2,
    total: 200
}

// Não podemos fazer
// Alterar uma constante
cart.quantity = 3

// Podemos fazer
// Criar um novo objeto e espelhar as propriedades do outro alterando o que precisar
const newCart = {...cart, quantity: 3}


// Exemplo ReactJS
const [amount, setAmount] = useState(0)

// Não fazer
amount = 2

// Pode fazer
setAmount(2)