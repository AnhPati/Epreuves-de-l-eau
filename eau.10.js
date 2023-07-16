/*Fonctions*/
const searchIndex = (arguments) => {
    let indexArguments = - 1
    let indexSearched = arguments.length - 1

    for (i = 0; i < indexSearched; i++) {
        if (arguments[i] === arguments[indexSearched]) {
            indexSearched = i

            return indexSearched
        }
    }

    return indexArguments
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length >= 3) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner au moins trois arguments.")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

/*Résolution*/
const getIndexSearched = () => {
    const arguments = isValidArguments(getArguments())

    if (!arguments) {
        return
    }

    return console.log(searchIndex(arguments))
}

/*Affichage du résultat*/
getIndexSearched()