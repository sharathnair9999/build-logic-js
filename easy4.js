// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const maxOf3 = (a, b, c) => {
  let max = a;
  {
    a > b && a > c ? (max = a) : b > a && b > c ? (max = b) : (max = c);
  }
  return max;
};

const num1 = 8;
const num2 = 23;
const num3 = 17;

console.log(maxOf3(num1, num2, num3));
