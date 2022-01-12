// Write a program to take a number input from user and print multiplication table 12 times for that number.

const num = 5;

const multTable = num => {
  for(let i =1;i<=12;i++){
    console.log(`${num} * ${i} = ${num*i}`);
  }
}

multTable(5)