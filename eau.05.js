/*Fonctions*/
const compareStrings = (firstString, secondString) => {
    const firstStringArray = firstString.toLowerCase().split('')
    const secondStringArray = secondString.toLowerCase().split('')
    let firstStringIndex = firstSameLetter(firstStringArray, secondStringArray) + 1
    let result = false

    if (firstStringIndex === null) {
        return result
    } else {
        let compareArray = [
            secondStringArray[0]
        ]

        for (i = 1; i < secondStringArray.length; i++) {
            if (secondStringArray[i] === firstStringArray[firstStringIndex]) {
                compareArray.push(firstStringArray[i])
                firstStringIndex += 1
            } else {
                return result
            }
        }

        if (compareArray.length === secondStringArray.length) {
            return result = true
        } else {
            return result
        }
    }
}

const firstSameLetter = (firstStringArray, secondStringArray) => {
    let indexFirstLetter = null

    for (i = 0; i < firstStringArray.length; i++) {
        if (firstStringArray[i] === secondStringArray[0]) {
            indexFirstLetter = i
            break
        }
    }

    return indexFirstLetter
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length === 2) {
        return arguments
    } else {
        return console.log("Une erreur est survenue. Veuillez renseigner deux arguments.")
    }
}

const isValidString = (string) => {
    if (isNaN(string)) {
        return string
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
const sayIfHaveSentence = () => {
    const strings = isValidString(isValidArguments(getArguments()))

    if ((!strings)) {
        return
    }

    return console.log(compareStrings(strings[0], strings[1]))
}

/*Affichage du résultat*/
sayIfHaveSentence()