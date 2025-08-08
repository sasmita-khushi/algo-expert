function SumOfEven(numbers) {
  const filterNums = numbers.filter((num) => {
    return num % 2 === 0;
  });
  console.log(filterNums);
  const total = filterNums.reduce((acc, num) => acc + num, 0);
  console.log(total);
}

SumOfEven([3, 6, 8, 5, 10]);

//OR
// function SumOfEven(numbers) {
//   const total = numbers.reduce((acc, num) => {
//     return num % 2 === 0 ? acc + num : acc;
//   }, 0);
//   console.log(total);
// }
//SumOfEven([3, 6, 8, 5, 10]);
