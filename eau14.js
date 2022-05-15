// Par ordre Ascii

const argTester = () => {

    const arguments = process.argv.slice(2);

    if (arguments.length < 2) {

        console.log("Veuillez passer au moins deux chaînes de caractère en argument");
        console.log("Exemple: node14.js Countdown to Extinction");

        return false;
    }

    console.log(arguments);

}

const getAsciiVal = (str) => {

    const strArr = str.split('');
    console.log(strArr);

}