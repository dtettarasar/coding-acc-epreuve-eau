// Entre min et max

const argTester = () => {

    const arguments = process.argv.slice(2);

    if (arguments.length !== 2) {
        console.log("Veuillez passer deux nombres entiers différents en argument");
        console.log("Exemple: node eau09.js 20 42");
        return false;
    }

    console.log(arguments);

}

argTester();