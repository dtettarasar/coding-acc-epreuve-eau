// Tri par sélection

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;
    const errorMsg = ("Veuillez passer une série de nombres entiers en argument (au moins deux nombres).\nExemple: node eau13.js -4 18 6 21 37 5");
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

            const int = parseInt(arguments[i]);
            data.push(int);

        }

    }

    return data;

}

console.log(argTester());
