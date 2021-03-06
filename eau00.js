// Combinaisons de 3 chiffres

// convertir des nombres en array
const numToArr = (number, digit) => {

  const numArr = number.toString().split('');


  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i]);
  }

  if (numArr.length < digit) {

    numArrInitLength = numArr.length;

    for (let i = 0; i < digit - numArrInitLength; i++) {
      numArr.unshift(0);
    }

  }

  return(numArr);

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

// Comparaison d'array
const arrComparison = (arrOne, arrTwo) => {

  const sortedArrOne = bubbleSort(arrOne);
  const sortedArrTwo = bubbleSort(arrTwo);

  if (sortedArrOne.join('') === sortedArrTwo.join('')) {
    return true;
  } else {
    return false;
  }

}

// s'assurer que tous les nombres d'un array soient bien différents
const allNumDifferent = (array) => {

  for (let i = 0; i < array.length; i++) {

    const elemToTest = array[i];
    let recurrence = 0;

    for (let j = 0; j < array.length;j++){
      if (elemToTest === array[j]) {
        recurrence++;
      }
    }

    if (recurrence !== 1) {
      return false;
    }

  }

  return true;

}

// identifier si une combinaison a déjà été trouvé et ajouté dans un array
const alreadyFoundComb = (allFoundComb, combToTest) => {

  for (let i = 0; i < allFoundComb.length; i++) {

    const testComparison = arrComparison(allFoundComb[i], combToTest);

    if (testComparison) {
      return true;
    }

  }

  return false;

}

const main = () => {

  // stocker les combinaisons trouvées
  const foundComb = [];

  for (let i = 0; i < 1000; i++) {

    const arrNum = numToArr(i,3);

    if (!alreadyFoundComb(foundComb, arrNum) && allNumDifferent(arrNum)) {
      foundComb.push(arrNum);
    }

  }

  // affiche résultat final
  for (let i = 0; i < foundComb.length; i++) {
    console.log(foundComb[i].join(''));
  }

}

main();
