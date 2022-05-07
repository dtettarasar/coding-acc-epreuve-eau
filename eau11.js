// Différence minimum absolue 

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;
    const errorMsg = ("Veuillez passer une série de nombres entiers en argument (au moins deux nombres).\nExemple: node eau11.js 27 6 12 13");
    
    if (arguments.length < 2) {
        console.log(errorMsg);
        return false;
    }

    console.log(arguments);

}

argTester();