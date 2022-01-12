// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const inpDay = "tuesday";

const whichDay = (dayy) => {
  if (dayy.toUpperCase() === "SATURDAY" || dayy.toUpperCase() === "SUNDAY")
    return `${dayy} is weekend`;
  return `${dayy} is weekday`;
};

console.log(whichDay(inpDay));