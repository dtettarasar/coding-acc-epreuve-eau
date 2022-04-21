// Suite de Fibonacci

const argTester = () => {

    const argument = process.argv.slice(2);

    if (argument.length !== 1) {
        console.log("veuillez passer un nombre entier en argument.");
        console.log("Exemple: node eau03.js 3");
        return false;
    }

    return argument;

}

const main = () => {

}

console.log(argTester());