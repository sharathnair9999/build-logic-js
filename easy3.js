// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const num1 = 129
const num2 = 251

const findMax = (a,b) =>{ 
  const maxNmin = [];
  if(a>b){
    maxNmin.push(b,a)
  }
  else{
     maxNmin.push(a,b)
  }
  return maxNmin;
}

 const ans = findMax(num1, num2)
 console.log(`The maximum is ${ans[1]} and the minimum is ${ans[0]}`);