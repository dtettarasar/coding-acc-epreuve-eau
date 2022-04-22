// Suite de Fibonacci

const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /^[0-9]+$/;
    const argIsNumber = pattern.test(argument[0]);

    if (argument.length !== 1 || !argIsNumber) {
        console.log("Veuillez passer un nombre entier positif en argument.");
        console.log("Exemple: node eau03.js 3");
        return false;
    }

    return parseInt(argument[0]);

}

const main = () => {

}

console.log(argTester());