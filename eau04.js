// Prochain nombre premier

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

const isPrimeNumber = () => {}

const findNextPrimeNumber = () => {}

const main = () => {}

console.log(argTester());
