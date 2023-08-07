// Write a function called "twoFer" that accepts a person's name 
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me");
};
var resu = twoFer("Alice");
console.log(resu); /* Output : one for Alice, one for me */
// Write a isLeapYear function that accepts a year and returns true or false 
// depending on if the year is a leap year or not
// isLeapYear(1997)  //false
// isLeapYear(1996)  //true
// isLeapYear(2012)  //true
var isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    }
    return false;
};
var out = isLeapYear(1997); /* Output : false */
console.log(out);
var out1 = isLeapYear(2012); /* Output : true */
console.log(out1);
