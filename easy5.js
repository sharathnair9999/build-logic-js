// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const month = "december";

const is31OrNot = (mon) => {
  const monthsNDays = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  let is31 = false;
  for ([key, value] of Object.entries(monthsNDays)) {
    if (mon.toUpperCase() === key.toUpperCase() && value === 31) {
      is31 = true;
      break;
    }
    
  }
  return is31;
};

console.log(is31OrNot(month))
