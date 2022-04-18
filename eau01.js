// Combinaisons de 2 nombres

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

main();
