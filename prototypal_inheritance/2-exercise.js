// Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

Date.prototype.lastYear = function() {
  return this.getFullYear() - 1
}

let testDate = new Date('5-8-90')
console.log(testDate.lastYear());
