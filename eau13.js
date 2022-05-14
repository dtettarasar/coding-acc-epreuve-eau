// Tri par sélection

const argTester = () => {

    const arguments = process.argv.slice(2);
    const pattern = /^-?[0-9]+$/;
    const errorMsg = ("Veuillez passer une série de nombres entiers en argument (au moins deux nombres).\nExemple: node eau13.js -4 18 6 21 37 5");
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

const selectionSort = (array, indStart) => {

  let lowestNumInd = indStart;

  for (let i = indStart; i < array.length; i++) {

    if (array[i] < array[lowestNumInd]) {
      lowestNumInd = i;
    }

    console.log(array[i]);

  }

  const temp = array[indStart];
  array[indStart] = array[lowestNumInd];
  array[lowestNumInd] = temp;

  console.log("---");

  if (indStart !== array.length - 1) {
    indStart++;
    console.log("indStart:" + indStart);
    console.log("array: " + array);
    selectionSort(array, indStart);
  } else {
    console.log("end of execution");
    console.log("array: " + array);
  }

}

const main = () => {

  const arguments = argTester();

  if (arguments) {

    selectionSort(arguments, 0);

  }

}

main();
