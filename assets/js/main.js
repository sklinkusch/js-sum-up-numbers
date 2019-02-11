function sumup(array) {
  return array.reduce((accumulator, value) => accumulator + value);
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumup(myArray));
