// Différence minimum absolue 

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;
    const errorMsg = ("Veuillez passer une série de nombres entiers en argument (au moins deux nombres).\nExemple: node eau11.js 27 6 12 13");
    const data = [];
    
    if (arguments.length < 2) {
        console.log(errorMsg);
        return false;
    }

    for (let i = 0; i < arguments.length; i++) {

        if (!pattern.test(arguments[i])) {
            console.log(errorMsg);
            return false;
        } else {
            data.push(parseInt(arguments[i]));
        }

    }

    console.log(arguments);
    console.log(data);

}

argTester();