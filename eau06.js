// Majuscule sur deux

const argTester = () => {

    const argument = process.argv.slice(2);

    if (argument.length !== 1) {
        console.log("Veuillez passer une chaîne de caractère en argument (avec au moins deux lettres).");
        console.log("Exemple: node eau06.js 'Pulse of the Maggots'");
    }

    console.log(argument);

}

argTester();