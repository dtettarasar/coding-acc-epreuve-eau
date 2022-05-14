// Tri à bulle

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;
    const errorMsg = ("Veuillez passer une série de nombres entiers en argument (au moins deux nombres).\nExemple: node eau12.js 27 6 12 13");
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

            const int = parseInt(arguments[i]);
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

const main = () => {

    const arguments = argTester();

    if (arguments) {

        const sortedArr = bubbleSort(arguments);
        const finalStr = sortedArr.join(' ');
        console.log(finalStr);

    }

}

main();
