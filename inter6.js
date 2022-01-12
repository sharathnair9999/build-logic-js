// Write a Program to take a number input from user and find if the number is Prime or not.

const num = 23;

const isPrime = numb => {
  if(numb===0 || numb ===1) return false;
  let isOrNot = false;
  for(let i =2;i<=Math.sqrt(numb/2);i++){
      if(numb%i==0){
        isOrNot = false;
        break;
      }
      isOrNot = true;
  }
  return isOrNot;
}

console.log(isPrime(num))

