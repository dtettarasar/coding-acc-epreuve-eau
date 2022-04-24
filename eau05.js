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

const strInStr = (obj) => {

    const fullStrArr = obj.fullStr.split('');
    const sampleStrArr = obj.sampleStr.split('');

    console.log(fullStrArr);
    console.log(sampleStrArr);

}

strInStr(argTester());