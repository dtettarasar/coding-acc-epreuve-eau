// Chiffres only 

// Récupérer Argument 
const argTester = () => {

    const argument = process.argv.slice(2);
    
    if (argument.length !== 1) {
        console.log("Veuillez passer une chaîne de caractère en argument.");
        console.log("Exemple: node eau08.js 'Twisted Transistor'");
        return false;
    }

    console.log(argument[0]);

}

const isDigit = (char) => {

    if (char.length !== 1) {
        console.log("la fonction ne doit prendre qu'un seul caractère");
        return false;
    }

    console.log(char);

}

const allIsDigit = (str) => {

    // TO DO

}

//argTester();

isDigit("test");
isDigit("p");