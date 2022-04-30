// Majuscule sur deux

// Récupérer les arguments
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

// Transformer la chaîne de caractère
const updateStr = (str) => {

    const strArr = str.toLowerCase().split('');
    const ltrPattern = /^[a-z\u00C0-\u00FF]*$/;

    let changeCase = false;

    for (let i = 0; i < strArr.length; i++) {

        // console.log(strArr[i]);
        const isLetter = ltrPattern.test(strArr[i]);

        if (!changeCase && isLetter) {
            strArr[i] = strArr[i].toUpperCase();
            changeCase = true;
        } else if (isLetter) {
            changeCase = false;
        }

    }
    
    const finalStr = strArr.join('');

    return finalStr;

}

// Afficher le résultat
const main = () => {

    const argument = argTester();

    if (argument) {

        const result = updateStr(argument);

        console.log(result);

    }

}

main();