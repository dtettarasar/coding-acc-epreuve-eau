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

const allIsDigit = (str) => {

    // TO DO

}

//argTester();

console.log(isDigit("test"));
console.log(isDigit("p"));
console.log(isDigit("3"));
console.log(isDigit("0"));