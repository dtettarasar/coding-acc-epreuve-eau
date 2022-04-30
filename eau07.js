// Majuscule

// Récupérer les arguments
const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /(?=.*[a-zA-Z\u00C0-\u00FF])/

    if (argument.length !== 1 || !pattern.test(argument[0])) {

        console.log("Veuillez passer une chaîne de caractère en argument (avec au moins une lettre).");
        console.log("Exemple: node eau07.js 'Holy Wars... The Punishment Due'");

        return false;
    }

    return argument[0];
}

const updateStr = (str) => {

    const strArr = str.toLowerCase().split('');
    const ltrPattern = /^[a-z\u00C0-\u00FF]*$/;
    const spPattern = /[\s\t\n]/

    for (let i = 0; i < strArr.length; i++) {
        console.log(strArr[i]);
        console.log(spPattern.test(strArr[i]));

        if (ltrPattern.test(strArr[i]) && i === 0) {

            strArr[i] = strArr[i].toUpperCase();

        }
    }

    console.log(strArr);

}

const main = () => {

    const argument = argTester();

    if (argument) {

        updateStr(argument);

    }

}

main();