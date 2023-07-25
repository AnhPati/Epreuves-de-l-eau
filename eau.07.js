/*Fonctions*/
const firstLetterUpperCase = (string) => {

    let stringArray = string.split('')

    if (string.charCodeAt(0) > 96) {
        stringArray[0] = String.fromCharCode(string.charCodeAt(0) - 32)
    }

    for (i = 0; i < stringArray.length; i++) {
        if ((stringArray[i - 1] === " " || stringArray[i - 1] === "\n" || stringArray[i - 1] === "\u0009") && string.charCodeAt(i) > 96) {
            stringArray[i] = String.fromCharCode(string.charCodeAt(i) - 32)
        }
    }

    return stringArray.join('')
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
const changeFirstLetterUpperCase = () => {
    const string = isValidArguments(getArguments())

    if (!string) {
        return
    } else if (!isValidString(string[0])) {
        return
    }

    return console.log(firstLetterUpperCase(string[0]))
}

/*Affichage du résultat*/
changeFirstLetterUpperCase()