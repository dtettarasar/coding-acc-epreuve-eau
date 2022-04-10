// Combinaisons de 3 chiffres

// functions

const getAllArr = () => {

    const mainArr = [];

    for (let i = 0; i < 1000; i++) {
        const numArr = i.toString().split('');

        if (numArr.length == 1) {
            for (let j = 0; j < 2;j++) {
                numArr.unshift('0');
            }
        } else if (numArr.length == 2) {
            numArr.unshift('0');
        }

        mainArr.push(numArr);
    }

    for (let i = 0; i < mainArr.length; i++) {
        console.log(mainArr[i]);
    }

}


const main = () => {

    getAllArr();

}

main();