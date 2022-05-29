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

    let asciiArrVal = [];

    for (let i = 0; i < strArr.length; i++) {

        const ascii = strArr[i].charCodeAt(0);
        asciiArrVal.push(ascii);

    }

    return asciiArrVal;

}

// Checker si la string de l'objet 1 a une valeur ascii inférieure à celle de l'objet 2
const objAreSorted = (objOne, objTwo) => {

    const shortLength = objOne.argAscii.length > objTwo.argAscii.length ? objTwo.argAscii.length : objOne.argAscii.length;

    if (objOne.argStr === objTwo.argStr) {
        return true;
    }

    for (let i = 0; i < shortLength; i++) {

        if (objOne.argAscii[i] < objTwo.argAscii[i]) {
            return true;
        } else if (objOne.argAscii[i] > objTwo.argAscii[i]) {
            return false;
        }
    }

    // Si les deux strings sont presque identiques, identifer laquelle est la plus longue pour en déduire l'ordre.
    return objOne.argAscii.length < objTwo.argAscii.length;

}

const bubbleSortObj = (array) => {

    let arrIsSorted = true;

    for (let i = 0; i < array.length - 1; i++) {

        if (!objAreSorted(array[i], array[i + 1])) {
            arrIsSorted = false;

            let smaller = array[i + 1];
            let higher = array[i];

            array[i] = smaller;
            array[i + 1] = higher;
        }

        if (!arrIsSorted) {
            bubbleSortObj(array);
        }

    }

    return array;
}

const main = () => {

    const arguments = argTester();

    if (arguments) {

        console.log(bubbleSortObj(arguments));

    }

}

main();
