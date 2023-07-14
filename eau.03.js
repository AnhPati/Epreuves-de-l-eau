/*Fonctions*/
const finabocciCalc = (number, beginning) => {
    if (number < beginning.length) {
        return beginning[number - 1]

    } else {
        let result = beginning
        for (i = result.length; i <= number; i++) {
            result.push(result[i - 1] + result[i - 2])
        }

        return result[result.length - 1]
    }
}

/*Gestion des erreurs*/
const isValidArguments = (arguments) => {
    if (arguments.length === 1) {
        return arguments
    } else {
        return console.log("-1")
    }
}

const isValidNumber = (number) => {
    if (!isNaN(number)) {
        return Number(number)
    } else {
        return console.log("-1")
    }
}

/*Parsing*/
const getArguments = () => {
    const arguments = process.argv.slice(2)
    return arguments
}

const finabocciBeginning = [0, 1, 1, 2]

/*Résolution*/
const getFinabocciNumber = () => {
    const number = isValidNumber(isValidArguments(getArguments()))

    if (!number) {
        return
    }

    return console.log(finabocciCalc(number, finabocciBeginning))
}

/*Affichage du résultat*/
getFinabocciNumber()