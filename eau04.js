// Prochain nombre premier

// Récupérer l'argument
const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /^[0-9]+$/;
    const argIsNumber = pattern.test(argument[0]);

    if (argument.length !== 1 || !argIsNumber) {
        console.log("Veuillez passer un nombre entier positif en argument.");
        console.log("Exemple: node eau04.js 7");
        return false;
    }

    return parseInt(argument[0]);

}

// Vérifier si un nombre est un nombre premier
const isPrimeNumber = (int) => {

    if (int === 1) {
        return false;
    }

    const divider = [];

    for (let i = int; i > 0; i--){

        const modulo = int % i;

        if (modulo === 0) {
            divider.push(i);
        }

        if (divider.length > 2) {
            break;
        }

    }

    if (divider.length === 2 && divider[0] === int && divider[1] === 1) {
        return true;
    } else {
        return false;
    }


}

// Trouver le premier nombre premier supérieur au nombre passé dans la fonction.
const getNextPrimeNumber = (int) => {

    let i = int;

    do {
        i++;
    } while (!isPrimeNumber(i));

    return i;

}

// Afficher le résultat
const main = () => {

    const number = argTester();

    if (number) {

        const nextPrimeNumber = getNextPrimeNumber(number);
        console.log(nextPrimeNumber);

    }

}

main();
