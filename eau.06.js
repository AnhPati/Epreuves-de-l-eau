/*Fonctions*/
const oneOnTwoUpperCase = (string) => {
    let stringArray = string.split('')
    let letterCounter = 0

    for (i = 0; i < stringArray.length; i++) {
        if ((string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) || (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91)) {

            if (letterCounter % 2 === 0 && string.charCodeAt(i) > 96) {
                stringArray[i] = String.fromCharCode(string.charCodeAt(i) - 32)

            } else if (!(letterCounter % 2 === 0) && string.charCodeAt(i) < 91) {
                console.log(String.fromCharCode(string.charCodeAt(i)))
                stringArray[i] = String.fromCharCode(string.charCodeAt(i) + 32)
            }

            letterCounter += 1
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
const getOneOnTwoUpperCase = () => {
    const string = isValidArguments(getArguments())

    if (!string) {
        return
    } else if (!isValidString(string)) {
        return
    }

    return console.log(oneOnTwoUpperCase(string))
}

/*Affichage du résultat*/
getOneOnTwoUpperCase()