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

    console.log(data);
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


const selectionSortObj = (array, indStart) => {

    let lowestNumInd = indStart;

    for (let i = indStart; i < array.length; i++) {

      if (array[i].argAscii < array[lowestNumInd].argAscii) {
        lowestNumInd = i;
      }

    }

    const temp = array[indStart];
    array[indStart] = array[lowestNumInd];
    array[lowestNumInd] = temp;

    if (indStart !== array.length - 1) {
      indStart++;
      selectionSortObj(array, indStart);
    }

    return array;

  }

const main = () => {

    const arguments = argTester();

    if (arguments) {

        const sortedArg = selectionSortObj(arguments,0);

        const strArr = [];

        for (let i = 0; i < sortedArg.length; i++) {
            strArr.push(sortedArg[i].argStr);
        }

        console.log(strArr.join(' '));

    }

}

//main();

argTester();
