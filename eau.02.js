/*Fonctions*/
const reverseArguments = (arguments) => {
    let reverseArgumentsArray = []
    for (i = arguments.length - 1; i >= 0; i--) {
        reverseArgumentsArray.push(arguments[i])
    }

    return reverseArgumentsArray
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length >= 1) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Le script nécessite au moins un argument.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const getReverseArguments = () => {
    const arguments = isValidArguments(getArguments())

    if (!arguments) {
        return
    }

    return console.log(reverseArguments(arguments))
}

/*Affichage du résultat*/
getReverseArguments()