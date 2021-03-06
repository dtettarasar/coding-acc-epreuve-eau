// Index Wanted

const argTester = () => {

  const arguments = process.argv.slice(2);

  const data = {
    arrayToCheck: [],
    elemToFind: ""
  };

  if (arguments.length < 2) {

    console.log("Veuillez passez au moins deux chaînes de caractère en argument.");
    console.log("Exemple : node eau10.js Killing Is My Business and Business Is Good");

    return false;

  }

  for (let i = 0; i < arguments.length - 1; i++) {
      data.arrayToCheck.push(arguments[i]);
  }

  data.elemToFind = arguments[arguments.length - 1];

  return data;

}

const getIndex = (obj) => {

    for (let i = 0; i < obj.arrayToCheck.length; i++) {

        if (obj.arrayToCheck[i] === obj.elemToFind) {
            return i;
        }

    }

    return -1;
    
}

const main = () => {

  const arguments = argTester();

  if (arguments) {

    const result = getIndex(arguments);
    console.log(result);

  }

}

main();
