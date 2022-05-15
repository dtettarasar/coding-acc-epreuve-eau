// Par ordre Ascii

const argTester = () => {

    const arguments = process.argv.slice(2);

    if (arguments.length < 2) {

        console.log("Veuillez passer au moins deux chaînes de caractère en argument");
        console.log("Exemple: node14.js Countdown to Extinction");

        return false;
    }

    // console.log(arguments);

    return arguments;

}

const getAsciiVal = (str) => {

    const strArr = str.split('');
    console.log(strArr);

    let asciiSum = 0;

    for (let i = 0; i < strArr.length; i++) {

        const ascii = strArr[i].charCodeAt(0);
        console.log(strArr[i] + ": " + ascii);
        asciiSum += ascii;

    }

    console.log("Str Ascii value: " + asciiSum);

}

const main = () => {

    const arguments = argTester();

    if (arguments) {
        getAsciiVal(arguments[0]);
    }

}

main();