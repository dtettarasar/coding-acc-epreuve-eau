// Combinaisons de 2 nombres

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

    console.log(sortedArrOne.join(','));
    console.log(sortedArrTwo.join(','));
  
    if (sortedArrOne.join(',') === sortedArrTwo.join(',')) {
      return true;
    } else {
      return false;
    }
  
}

// générer toutes les combinaisons possibles
const generateComb = () => {

  const fullArr = [];

  for (let i = 0; i < 100; i++) {

    for (let j = 0; j < 100; j++) {

      const combArr = [];
      combArr.push(i);
      combArr.push(j);
      //console.log(combArr);

      if (allNumDifferent(combArr)) {
          fullArr.push(combArr);
      }

    }

  }

  return fullArr;

}

const main = () => {

  const allCombs = generateComb();

  for (let i = 0; i < allCombs.length;i++) {
    console.log(allCombs[i]);
  }

}

//main();
