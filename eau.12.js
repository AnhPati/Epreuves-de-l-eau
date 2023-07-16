/*Fonctions*/
const bubbleSort = (array) => {
    count = 0
    let sortArray = array

    for (i = 0; i < array.length; i++) {
        if (sortArray[i + 1] < sortArray[i]) {
            let tempArray = [sortArray[i + 1], sortArray[i]]
            sortArray[i] = tempArray[0]
            sortArray[i + 1] = tempArray[1]
            count++
        }

        if (i + 1 === sortArray.length - 1) {
            if (count === 0) {
                break
            } else {
                count = 0
                i = i - sortArray.length - 1
            }

        }
    }

    return sortArray.join(" ")
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
const getBubbleSort = () => {
    let numbers = isValidArguments(getArguments())

    if (!numbers) {
        return
    }

    for (i = 0; i < numbers.length; i++) {
        if (!isValidNumber(numbers[i])) {
            return
        }
    }

    return console.log(bubbleSort(numbers))
}

/*Affichage du résultat*/
getBubbleSort()