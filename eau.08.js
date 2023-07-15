/*Fonctions*/
const isValidNumber = (argument) => {
    let numberOrString = argument.split('')
    result = false

    for (element of numberOrString) {
        if (element >= 0 && element <= 9) {
            result = true
        } else {
            result = false
            return result
        }
    }

    return result
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner un seul argument.")
    }
}

// const isValidNumber = (number) => {
//     if (!isNaN(number)) {
//         return Number(number)
//     } else {
//         return console.log("Une erreur est survenue.")
//     }
// }

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const getIsANumber = () => {
    const argument = isValidArguments(getArguments())

    if (!argument) {
        return
    }

    return console.log(isValidNumber(argument[0]))
}

/*Affichage du résultat*/
getIsANumber()