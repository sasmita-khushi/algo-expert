let x = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
};
let y = {
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
};
let z = {
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
  100: "Hundred",
};

// let a ={
//     100: "Hundred",
//     1000:"Thousand",
//     100000:"Lakh",
//     10000000:"crore"
// }
export default function convertToWord(num) {
  //if (num === 0) return "zero";
  if (num <= 10) {
    return x[num];
  } else if (num > 10 && num < 20) {
    return y[num];
  } else if (num >= 20 && num <= 100) {
    let quotient = Math.floor(num / 10) * 10;
    let remainder = num % 10;

    if (remainder === 0) {
      return z[num];
    } else {
      return z[quotient] + " " + x[remainder];
    }
  } else if (num > 100 && num < 1000) {
    let quotient = Math.floor(num / 100);
    let remainder = num % 100;
    if (remainder === 0) {
      return x[quotient] + " " + z[100];
    } else {
      return x[quotient] + " " + z[100] + " " + convertToWord(remainder);
    }
  } else if (num >= 1000 && num < 100000) {
    let quotient = Math.floor(num / 1000);
    let remainder = num % 1000;
    if (remainder === 0) {
      return convertToWord(quotient) + " " + "Thousand";
    } else {
      return (
        convertToWord(quotient) +
        " " +
        "Thousand" +
        " " +
        convertToWord(remainder)
      );
    }
  } else if (num >= 100000 && num < 10000000) {
    let quotient = Math.floor(num / 100000);
    let remainder = num % 100000;
    if (remainder === 0) {
      return convertToWord(quotient) + " " + "Lakh";
    } else {
      return (
        convertToWord(quotient) + " " + "Lakh" + " " + convertToWord(remainder)
      );
    }
  } else if (num >= 10000000) {
    let quotient = Math.floor(num / 10000000);
    let remainder = num % 10000000;

    if (remainder === 0) {
      return convertToWord(quotient) + " " + "Crore";
    } else {
      return (
        convertToWord(quotient) + " " + "Crore" + " " + convertToWord(remainder)
      );
    }
  }
}
