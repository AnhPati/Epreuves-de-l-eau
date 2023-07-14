/*Fonctions*/
const getTwiceGrowingNumber = () => {
    let result = []

    for (i = 0; i <= 9; i++) {
        for (j = 0; j <= 9; j++) {
            for (k = 0; k <= 9; k++) {
                for (l = 1; l <= 9; l++) {
                    let firstNumber = i.toString() + j.toString()
                    let secondNumber = k.toString() + l.toString()

                    if (secondNumber > firstNumber) {
                        result.push(`${firstNumber} ${secondNumber}`)
                    }
                }
            }
        }
    }
    return console.log(result.join(", "))
}

/* Affichage du résultat */
getTwiceGrowingNumber()