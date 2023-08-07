// Write a function called "twoFer" that accepts a person's name 
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

const twoFer=(name:string="you"):string=>{
    return `one for ${name}, one for me`;
}
let resu=twoFer("Alice");
console.log(resu) /* Output : one for Alice, one for me */


// Write a isLeapYear function that accepts a year and returns true or false 
// depending on if the year is a leap year or not
// isLeapYear(1997)  //false
// isLeapYear(1996)  //true
// isLeapYear(2012)  //true

const isLeapYear=(year:number):boolean=>{
    if(year%4===0 && year%100!==0 || year%400===0){
        return true;
    }
    return false;
}
let out=isLeapYear(1997); /* Output : false */
console.log(out);

let out1=isLeapYear(2012); /* Output : true */
console.log(out1);