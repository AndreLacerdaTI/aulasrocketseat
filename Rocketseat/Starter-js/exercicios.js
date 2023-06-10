// Exercicio 1 -----------------------------------------------------------------------------------
/*
notas = [10,20,30,40,50,69,70,80,90,100]
for(i=0;i<10;i++){
    console.log("Nota: "+notas[i])
    if(notas[i]>=90){
        console.log("A")
    }else if(notas[i]>=80 && notas[i]<=89){
        console.log("B")
    }else if(notas[i]>=70 && notas[i]<=79){
        console.log("C")
    }else if(notas[i]>=60 && notas[i]<=69){
        console.log("D")
    }else if(notas[i]<60){
        console.log("F")
    }else{
        console.log("Sem nota")
    }
}
*/


// Feito com variaveis recebendo as condições
/*
let score = 65
let scoreA = score >=90 && score <=100
let scoreB = score >=80 && score <=89
let scoreC = score >=70 && score <=79
let scoreD = score >=60 && score <=69
let scoreF = score < 60 && score >=0

let scoreFinal;

if(scoreA){
    scoreFinal = "A";
}else if (scoreB){
    scoreFinal = "B";
}else if (scoreC){
    scoreFinal = "C";
}else if (scoreD){
    scoreFinal = "D";
}else if (scoreE){
    scoreFinal = "E";
}else if (scoreF){
    scoreFinal = "F";
}else{
    scoreFinal = "Nota invalida"
}
console.log(scoreFinal)



function getScore(score){
    let scoreA = score >=90 && score <=100
    let scoreB = score >=80 && score <=89
    let scoreC = score >=70 && score <=79
    let scoreD = score >=60 && score <=69
    let scoreE = score < 60 && score >=0

    let scoreFinal;

    if(scoreA){
        scoreFinal = "A";
    }else if (scoreB){
        scoreFinal = "B";
    }else if (scoreC){
        scoreFinal = "C";
    }else if (scoreD){
        scoreFinal = "D";
    }else if (scoreE){
        scoreFinal = "E";
    }else{
        scoreFinal = "Nota invalida"
    }
    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))

*/


// Exercicio 2 ---------------------------------------------------------------------------------------


/*
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34,128.45,176.87,1450.00]
}

function sum(array){
    let total = 0;

    for (let value of array){
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >=0

    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo"
    }

    
    console.log('Seu saldo é: ' + balanceText+': R$ '+total.toFixed(2))
    //console.log('Seu saldo é:  ${balanceText}: ${total.toFixed(2)}') // Não funciona
}

calculateBalance()
*/

// Exercicio 3 ------------------------------------------------------------------------------------

/*
function fahrenheitToCelsius(f){
    c = (f -32) * 1.8

    console.log(c+'ºC')
}
function celsiusToFahrenheit(c){
    f = c * 1.8000 + 32.00

    console.log(f+'ºf')
}
//celsiusToFahrenheit(0);
fahrenheitToCelsius(32);
*/

// Feito em aula
/*
function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrnheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrnheitExists){
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrnheit) => (fahrnheit-32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists){
        // C -> F
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    //transformDegree('50Z')
} catch(error){
    console.log(error.message)
}
*/

// Exercicio 4 -----------------------------------------------------------------------------------

/*
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log('Total de autores: ',authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log('Livros do autor '+author+': '+books.join(", ")) //,books
}
booksOfAuthor('Augusto Cury');
*/