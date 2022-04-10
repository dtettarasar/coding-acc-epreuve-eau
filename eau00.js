// Combinaisons de 3 chiffres

// functions

// convertir des nombres en array
const numToArr = (number, digit) => {

  const numArr = number.toString().split('');

  if (numArr.length < digit) {

    for (let i = 0; i <= digit - numArr.length; i++) {
      numArr.unshift('0');
    }

  }

  console.log(numArr);

}


const main = () => {

  for (let i = 0; i < 1000; i++) {
    numToArr(i,3);
  }

}

main();
