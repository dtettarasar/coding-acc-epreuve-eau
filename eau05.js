// String dans String

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

const arrComparison = (arrOne, arrTwo) => {

    if (arrOne.length === arrTwo.length) {

        // console.log(arrOne);
        // console.log(arrTwo);

        for (let i = 0; i < arrOne.length; i++) {
            // console.log(arrOne[i] === arrTwo[i]);

            if (arrOne[i] !== arrTwo[i]) {
                return false;
            }
        }

        return true;
    } 
}

const strInStr = (obj) => {

    const fullStrArr = obj.fullStr.split('');
    const sampleStrArr = obj.sampleStr.split('');

    //console.log(fullStrArr);
    //console.log(sampleStrArr);

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

const main = () => {

    const arg = argTester();

    if (arg) {

        const testStr = strInStr(arg);
        const result = testStr ? true : false ;

        console.log(result);

    }

}


main();


