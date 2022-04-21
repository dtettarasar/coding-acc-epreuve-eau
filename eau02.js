// Paramètres à l’envers

const argTester = () => {

    const arguments = process.argv.slice(2);
    console.log(arguments);

    if (arguments.length === 0) {
        console.log("Veuillez passer au moins un argument.");
        console.log("Exemple: node eau02.js ");
        return false;
    }

}

const main = () => {

}

argTester();