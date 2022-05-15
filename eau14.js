// Par ordre Ascii

const argTester = () => {

    const arguments = process.argv.slice(2);

    const data = [];

    if (arguments.length < 2) {

        console.log("Veuillez passer au moins deux chaînes de caractère en argument");
        console.log("Exemple: node14.js Countdown to Extinction");

        return false;
    }

    for (let i = 0; i < arguments.length; i++) {

        const argObj = {
            argStr: arguments[i],
            argAscii: getAsciiVal(arguments[i])
        };

        data.push(argObj);

    }

    return data;

}

const getAsciiVal = (str) => {

    const strArr = str.split('');

    let asciiSum = 0;

    for (let i = 0; i < strArr.length; i++) {

        const ascii = strArr[i].charCodeAt(0);
        asciiSum += ascii;

    }

    return asciiSum;

}

const main = () => {

    const arguments = argTester();

    if (arguments) {
        console.log(arguments);
    }

}

main();