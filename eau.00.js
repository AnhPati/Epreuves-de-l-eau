/* Fonctions */
const getGrowingNumber = () => {
    let result = []

    for (i = 0; i <= 9; i++) {
        for (j = 0; j <= 9; j++) {
            for (k = 0; k <= 9; k++) {
                if ((i !== j && j !== k && i !== k) && (j > i && k > j)) {
                    result.push(`${i}${j}${k}`)
                }
            }
        }
    }
    return console.log(result.join(", "))
}

/* Affichage du résultat */
getGrowingNumber()