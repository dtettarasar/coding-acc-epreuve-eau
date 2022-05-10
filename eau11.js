// Différence minimum absolue

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;
    const errorMsg = ("Veuillez passer une série de nombres entiers en argument (au moins deux nombres).\nExemple: node eau11.js 27 6 12 13");
    const data = [];

    if (arguments.length < 2) {
        console.log(errorMsg);
        return false;
    }

    for (let i = 0; i < arguments.length; i++) {

        if (!pattern.test(arguments[i])) {
            console.log(errorMsg);
            return false;
        } else {

            const int = parseInt(arguments[i]) < 0 ? parseInt(arguments[i]) * -1 : parseInt(arguments[i]);
            data.push(int);

        }

    }

    return data;

}

// tri à bulle
const bubbleSort = (array) => {

    let arrIsSorted = true;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > array[i + 1]) {

            arrIsSorted = false;

            let smaller = array[i + 1];
            let higher = array[i];

            array[i] = smaller;
            array[i + 1] = higher;

        }

        if (!arrIsSorted) {
            bubbleSort(array);
        }

    }

    return array;

}

const findLowestVal = (array) => {

    const arrSorted = bubbleSort(array);
    //console.log(arrSorted);
    //console.log(arrSorted[0]);

    return arrSorted[0];

}

const getAllSubstracts = (arr, int) => {

    const diffArr = [];

    for (let i = 0; i < arr.length; i++) {
        const diff = arr[i] - int;

        if (diff > 0) {
            diffArr.push(diff);
        }
    }

    return diffArr;

}


const getLowestSubs = (array) => {

    const allResults = [];

    for (let i = 0; i < array.length; i++) {
      const allSubstracts = getAllSubstracts(array, array[i]);
      const lowestSub = findLowestVal(allSubstracts);

      // console.log(allSubstracts);

      if (lowestSub) {
        allResults.push(lowestSub);
      }

    }

    return allResults;

}

const twiceSameNum = (array) => {
    console.log(array);

    const arrSorted = bubbleSort(array);

    console.log(arrSorted);

    for (let i = 0; i < arrSorted.length; i++) {
        
        if (arrSorted[i] === arrSorted[i-1]) {
            return true;
        }

    }

    return false;

}

const main = () => {

    const arguments = argTester();

    if (arguments) {
        /*
        const allLowestSubs = getLowestSubs(arguments);
        const result = findLowestVal(allLowestSubs);
        console.log(result);
        */

        console.log(twiceSameNum(arguments));
    }

}

main();
