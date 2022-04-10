// Combinaisons de 3 chiffres

// functions

// convertir des nombres en array
const numToArr = (number, digit) => {

  const numArr = number.toString().split('');


  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i]);
  }

  if (numArr.length < digit) {

    numArrInitLength = numArr.length;

    for (let i = 0; i < digit - numArrInitLength; i++) {
      // console.log(i)
      numArr.unshift(0);
    }

  }

  console.log(numArr);

}

//tri à bulle
const bubbleSort = (array) => {

    //console.log(array);

    const process = () => {

        let arrIsSorted = true;

        for (let i = 0;i < array.length; i++) {

            //console.log(array[i]);

            if (array[i] > array[i + 1]) {

                arrIsSorted = false;

                let smaller = array[i + 1];
                let higher = array[i];

                array[i] = smaller;
                array[i + 1] = higher;

            }

            if (!arrIsSorted) {
                process();
            }

        }

    }

    process();

    return array;

}

const main = () => {


  for (let i = 0; i < 1000; i++) {
    numToArr(i,3);
  }

}

main();
