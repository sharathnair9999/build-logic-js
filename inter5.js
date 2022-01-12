// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const num = 5;

const fact = numb => {
  if(numb===0 || numb===1) return 1;
 return (numb* fact(numb-1))
}

console.log(fact(num));