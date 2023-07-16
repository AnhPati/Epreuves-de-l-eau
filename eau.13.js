/*Fonctions*/
const sortBySelection = (array) => {
    let sortArray = array
    let selectionArray = []
    let tempValue = []

    for (i = 0; i < sortArray.length; i++) {
        if (sortArray.length > 1) {
            tempValue = minValue(sortArray)
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

const minValue = (array) => {
    let result = [array[0], 0]

    for (i = 1; i < array.length; i++) {
        if (array[i] < result[0]) {
            result[0] = array[i]
            result[1] = i
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
const getSortBySelection = () => {
    let numbers = isValidArguments(getArguments())

    if (!numbers) {
        return
    }

    for (i = 0; i < numbers.length; i++) {
        if (!isValidNumber(numbers[i])) {
            return
        } else {
            numbers[i] = Number(numbers[i])
        }
    }

    return console.log("final : " + sortBySelection(numbers))
}

/*Affichage du résultat*/
getSortBySelection()