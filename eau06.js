// Majuscule sur deux

const argTester = () => {

    const argument = process.argv.slice(2);
    const pattern = /(?=.*[a-zA-Z].*[a-zA-Z])/

    if (argument.length !== 1 || !pattern.test(argument[0])) {

        console.log("Veuillez passer une chaîne de caractère en argument (avec au moins deux lettres).");
        console.log("Exemple: node eau06.js 'Pulse of the Maggots'");

        return false;
    }

    return argument[0];
}

const updateStr = (str) => {

    const strArr = str.toLowerCase().split('');
    const ltrPattern = /^[a-z\u00C0-\u00FF]*$/;

    for (let i = 0; i < strArr.length; i++) {

        console.log(strArr[i]);
        console.log(ltrPattern.test(strArr[i]));

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