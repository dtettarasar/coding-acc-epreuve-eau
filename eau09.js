// Entre min et max

const argTester = () => {

    const arguments = process.argv.slice(2);
    const exampleStr = "Exemple: node eau09.js 20 42"
    const pattern = /^-?[0-9]+$/;
    const argsAreNum = pattern.test(arguments[0]) && pattern.test(arguments[1]);

    if (arguments.length !== 2 || !argsAreNum) {
        console.log("Veuillez passer deux nombres entiers différents en argument.");
        console.log(exampleStr);
        return false;
    }

    const numbers = {};
    const numOne = parseInt(arguments[0]);
    const numTwo = parseInt(arguments[1]);

    // console.log(numOne, numTwo);

    if (numOne === numTwo) {

        console.log("Attention: Les deux nombres entiers doivent être différents.");
        console.log(exampleStr);
        return false;

    } else if (numOne > numTwo) {

        numbers.great = numOne;
        numbers.small = numTwo;

    } else {

        numbers.great = numTwo;
        numbers.small = numOne;

    }

    return numbers;

}

const main = () => {
    
    const arguments = argTester();

    if (arguments) {

        console.log(arguments);

    }

}

main();