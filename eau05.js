// String dans String

// Récupérer les chaînes de caractère passées en argument
const argTester = () => {

    const arguments = process.argv.slice(2);

    const strings = {}

    if (arguments.length !== 2) {
        console.log("Veuillez passer deux chaînes de caractère en arguments.");
        console.log("Exemple: node eau05.js 'The Heaviest Matter Of The Universe' 'Matter'");
        return false;
    }

    strings.fullStr = arguments[0];
    strings.sampleStr = arguments[1];

    return strings;

}

// Comparer deux arrays
const arrComparison = (arrOne, arrTwo) => {

    if (arrOne.length === arrTwo.length) {

        for (let i = 0; i < arrOne.length; i++) {

            if (arrOne[i] !== arrTwo[i]) {
                return false;
            }

        }

        return true;
    } 
}

// Vérifie si la deuxième string est bien présente dans la première
const strInStr = (obj) => {

    const fullStrArr = obj.fullStr.split('');
    const sampleStrArr = obj.sampleStr.split('');

    for (let i = 0; i < fullStrArr.length;i++) {

        if (fullStrArr[i] === sampleStrArr[0]) {

            const fullStrExtract = [];

            for (let j = 0; j < sampleStrArr.length; j++) {

                fullStrExtract.push(fullStrArr[i + j]);

            }

            return arrComparison(fullStrExtract, sampleStrArr);

        }

    }

}

// Afficher le résultat
const main = () => {

    const arg = argTester();

    if (arg) {

        const testStr = strInStr(arg);
        const result = testStr ? true : false ;
        console.log(result);

    }

}


main();


