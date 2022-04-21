// Paramètres à l’envers

const argTester = () => {

    const arguments = process.argv.slice(2);

    if (arguments.length === 0) {
        console.log("Veuillez passer au moins un argument.");
        console.log("Exemple: node eau02.js Leach A On Freak");
        return false;
    }

    return arguments;

}

const displayArgs = (array) => {

    for(let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }

}

const main = () => {

    const arguments = (argTester());

    if (arguments) {
        displayArgs(arguments);
    }

}

main();