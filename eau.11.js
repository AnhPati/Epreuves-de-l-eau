/*Fonctions*/
const gapCalc = (numbers) => {
    let gapsArray = []
    let tempNumbers = [0, 0]

    for (i = 0; i < numbers.length; i++) {
        for (j = 0; j < numbers.length; j++) {
            if (i !== j) {
                if (numbers[i] >= 0 && numbers[j] >= 0) {
                    if (numbers[i] >= numbers[j]) {
                        gapsArray.push(numbers[i] - numbers[j])
                    } else {
                        gapsArray.push(numbers[j] - numbers[i])
                    }
                } else if (numbers[i] < 0 && numbers[j] > 0) {
                    tempNumbers[0] = negativeToPositive(numbers[i])
                    gapsArray.push(numbers[j] + tempNumbers[0])

                } else if (numbers[j] < 0 && numbers[i] > 0) {
                    tempNumbers[0] = negativeToPositive(numbers[j])
                    gapsArray.push(numbers[i] + tempNumbers[0])

                } else {
                    tempNumbers[0] = negativeToPositive(numbers[i])
                    tempNumbers[1] = negativeToPositive(numbers[j])

                    if (tempNumbers[0] >= tempNumbers[1]) {
                        gapsArray.push(tempNumbers[0] - tempNumbers[1])
                    } else {
                        gapsArray.push(tempNumbers[1] - tempNumbers[0])
                    }
                }
            }
        }
    }

    return minGap(gapsArray)
}

const negativeToPositive = (number) => {
    let numberString = number.toString().slice(1)
    return Number(numberString)
}

const minGap = (array) => {
    let result = array[0]

    for (i = 1; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i]
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
const getMinGap = () => {
    let numbers = isValidArguments(getArguments())

    if (!numbers) {
        return
    }

    for (i = 0; i < numbers.length; i++) {
        if (!isValidNumber(numbers[i])) {
            return
        } else {
            numbers[i] = isValidNumber(numbers[i])
        }
    }

    return console.log(gapCalc(numbers))
}

/*Affichage du résultat*/
getMinGap()