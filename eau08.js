// Chiffres only 

const main = () => {
    
    const argument = argTester();

    if (argument) {

        const result = allIsDigit(argument);
        console.log(result);

    }

}

// Récupérer Argument 
const argTester = () => {

    const argument = process.argv.slice(2);
    
    if (argument.length !== 1) {
        console.log("Veuillez passer une chaîne de caractère en argument.");
        console.log("Exemple: node eau08.js 'Twisted Transistor'");
        return false;
    }

    return argument[0];

}

// Identifier si un caractère est bien un chiffre
const isDigit = (char) => {

    const intArr = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ];

    if (char.length !== 1) {
        console.log("la fonction ne doit prendre qu'un seul caractère");
        return false;
    }

    for (let i = 0; i < intArr.length; i++) {
        if (char === intArr[i]) {
            return true;
        }
    }

    return false;

}

// Vérifier si une chaîne de caractère est faite uniquement de chiffres
const allIsDigit = (str) => {

    const strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {

        const charIsDigit = isDigit(strArr[i]);

        if (!charIsDigit) {
            return false;
        }

    }

    return true;

}

main();