/*Fonctions*/
const PrimeSearch = (number) => {
    let primeNumber = number
    let i = 2

    for (i = 2; i <= primeNumber; i++) {
        if ((primeNumber % i === 0) && primeNumber !== i) {
            primeNumber += 1
            i = 2

        } else if (primeNumber === i) {
            return primeNumber
        }
    }
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return arguments
    } else {
        return console.log("-1")
    }
}

const isValidNumber = (number) => {
    if (!isNaN(number) && number > 1) {
        return Number(number)
    } else {
        return console.log("-1")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const getNextPrimeNumber = () => {
    const number = isValidNumber(isValidArguments(getArguments()))

    if (!number) {
        return
    }

    return console.log(PrimeSearch(number))
}

/*Affichage du résultat*/
getNextPrimeNumber()