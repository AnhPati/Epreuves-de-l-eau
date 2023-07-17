/*Fonctions*/
const celebration = (string) => {
    return console.log(`Je suis sorti des vainqueurs des épreuves de l'eau, ce fut ${string} !`)
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner un seul argument.")
    }
}

const isValidString = (string) => {
    if (isNaN(string)) {
        return string.toString()
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
const getCelebration = () => {
    let string = isValidArguments(getArguments())

    if (!string) {
        return
    }

    if (!isValidString(string)) {
        return
    }

    return celebration(string[0])
}

/*Affichage du résultat*/
getCelebration()