let arr = [1, 120];

function sum(array) {
  if (arr === undefined) {
    throw new Error("No parameter provided");
  }

  if (array.lenght === 0) return 0;

  return array.reduce((acc, value) => acc + value, 0);
}


console.log(sum(arr));
