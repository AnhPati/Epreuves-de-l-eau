/*Fonctions*/
const sortByASCII = (array) => {
    let sortArray = array
    let selectionArray = []
    let tempValue = []

    for (i = 0; i < sortArray.length; i++) {
        if (sortArray.length > 1) {
            tempValue = minValueASCII(sortArray)
            sortArray.splice(tempValue[1], 1)
            selectionArray.push(tempValue[0])

        } else {
            selectionArray.push(sortArray[0])
        }

        if (sortArray.length > 0) {
            i = 0
        }
    }

    selectionArray.push(sortArray[0])

    return selectionArray.join(" ")
}

const minValueASCII = (array) => {
    let result = [array[0], 0]

    for (i = 1; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {

            if (array[i].charCodeAt(j) < result[0].charCodeAt(j)) {
                result[0] = array[i]
                result[1] = i
            } else if (array[i].charCodeAt(j) === result[0].charCodeAt(j)) {
                continue
            } else {
                break
            }
        }
    }

    return result
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length >= 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner au moins deux arguments.")
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
const getSortByASCII = () => {
    let strings = isValidArguments(getArguments())

    if (!strings) {
        return
    }

    for (i = 0; i < strings.length; i++) {
        if (!isValidString(strings[i])) {
            return
        }
    }

    return console.log(sortByASCII(strings))
}

/*Affichage du résultat*/
getSortByASCII()