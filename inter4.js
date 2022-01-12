// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// assuming to print first 10 fibonacci numbers

const ran = 10;

const fiboSeries = num => {
  let fir = 0;
  let sec =1;
  let nextNum;
  for(let i =0 ;i<num;i++){
    console.log(fir);
    nextNum = fir+ sec;
    fir = sec;
    sec = nextNum;
  }
}

fiboSeries(ran)