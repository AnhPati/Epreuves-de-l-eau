/*Fonctions*/
const isValidNumber = (argument) => {
    let numberOrString = argument.split('')
    result = false

    for (const element of numberOrString) {
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
    console.log('Bonne taille ?', arguments.lenght)
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
    console.log('arguments :', arguments)
    console.log(arguments.lenght === 1)
    return arguments
}

/*Résolution*/
const getIsANumber = () => {
    const argument = isValidArguments(getArguments())

    if (!argument) {
        return
    }
    console.log('getIsANumber argument :', argument)
    return console.log(isValidNumber(argument[0]))
}

/*Affichage du résultat*/
getIsANumber()