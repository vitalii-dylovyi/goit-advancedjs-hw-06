/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Day) {
  if (day === Day.Saturday || day === Day.Sunday) {
    return true;
  }

  return false;
}

