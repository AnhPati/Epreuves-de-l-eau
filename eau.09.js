/*Fonctions*/
const consecutiveNumbers = (firstNumber, secondNumber) => {
    let resultArray = []
    let tempNumber = 0

    if (firstNumber > secondNumber) {
        tempNumber = secondNumber
        secondNumber = firstNumber
        firstNumber = tempNumber
    }

    for (i = firstNumber; i < secondNumber; i++) {
        resultArray.push(i)
    }

    return resultArray.join(', ')
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length === 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner deux arguments.")
    }
}

const isValidNumber = (number) => {

    if (!isNaN(number)) {
        return Number(number)
    } else {
        return console.log("Une erreur est survenue.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const getConsecutiveNumbers = () => {
    const arguments = isValidArguments(getArguments())

    if (!arguments) {
        return
    } else if (!isValidNumber(arguments[0] || !isValidNumber(arguments[1]))) {
        return
    }

    return console.log(consecutiveNumbers(arguments[0], arguments[1]))
}

/*Affichage du résultat*/
getConsecutiveNumbers()