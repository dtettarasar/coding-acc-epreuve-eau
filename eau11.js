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
    console.log(arrSorted);
    console.log(arrSorted[0]);

}

const getAllSubstracts = (arr, int) => {

    const diffArr = [];

    for (let i = 0; i < arr.length; i++) {
        const diff = arr[i] - int;
        //console.log(arr[i] - int);

        if (diff >= 0) {
            diffArr.push(diff);
        }
    }

    return diffArr;

}


const main = () => {

    const arguments = argTester();

    if (arguments) {
        console.log(arguments);
        console.log(getAllSubstracts(arguments, arguments[0]));
    }

}

main();