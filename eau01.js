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

// générer toutes les combinaisons possibles
const generateComb = () => {

  const fullArr = [];

  for (let i = 0; i < 100; i++) {

    for (let j = 0; j < 100; j++) {

      const combArr = [];
      combArr.push(i);
      combArr.push(j);
      //console.log(combArr);

      fullArr.push(combArr);

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
