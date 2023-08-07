var array1 = [];
var array2 = [];
array2.push("Hello");
array2.push("World");
//  array2.push(4);  Assignment of number type is not allowed in string array
console.log(array2);
var array3 = [2, 3];
//  array3.push("hello"); Assignment of string type is not allowed in number array
console.log(array3);
var array4 = [];
array4.push(true);
console.log(array4);
var array5 = [];
// array5.push("Aashish"); // Error: Argument of type 'string' is not assignable to parameter of type 'Point'
array5.push({ x: 4, y: 5 });
//  array5.push({x:4});  Error: property y is missing
console.log(array5);
// Multidimensional array
var array6 = [[1, 2], [3, 4]]; /* Two dimensional array */
var array7 = [[["Sumit", "Sujan"], ["Someone", "random"]], [["Aashish", "Prem"], ["anyone", "Harry"]]]; /* Two dimensional array */
// Array Exercise
/* Create an empty array of numbers called ages. */
var ages = [];
/* Create an array variable called gameBoard that starts as an empty array.
   It should be typed to hold a 2 dimensional array of strings. */
var gameBoard = [];
/* Write a function called getTotal that accepts an array of Product types
   It should return the sum of all the product prices */
var getTotal = function (products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
};
var result = getTotal([{ name: "Coffee mug", price: 300 }, { name: "Soap", price: 33 }]);
console.log(result);
