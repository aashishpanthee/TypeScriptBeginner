const array1:[]=[];
const array2:string[]=[];
array2.push("Hello");
array2.push("World");
//  array2.push(4);  Assignment of number type is not allowed in string array
console.log(array2);
 
const array3:number[]=[2,3];
//  array3.push("hello"); Assignment of string type is not allowed in number array
console.log(array3);

const array4:Array<boolean>=[];
array4.push(true);
console.log(array4);

type Point={
    x:number;
    y:number;
}
const array5:Point[]=[];
// array5.push("Aashish"); // Error: Argument of type 'string' is not assignable to parameter of type 'Point'
array5.push({x:4,y:5});
//  array5.push({x:4});  Error: property y is missing
console.log(array5);

// Multidimensional array
const array6:number[][]=[[1,2],[3,4]];  /* Two dimensional array */
const array7:string[][][]=[[["Sumit","Sujan"],["Someone","random"]],[["Aashish","Prem"],["anyone","Harry"]]];  /* Two dimensional array */

// Array Exercise

/* Create an empty array of numbers called ages. */
const ages:number[]=[];

/* Create an array variable called gameBoard that starts as an empty array.
   It should be typed to hold a 2 dimensional array of strings. */
const gameBoard:string[][]=[];


/* Create a product type that contains a name and a price. */
type Product={
    name:string;
    price:number;
}

/* Write a function called getTotal that accepts an array of Product types
   It should return the sum of all the product prices */

   const getTotal=(products:Array<Product>):number=>{
    let total:number=0;
    for (const product of products){
        total+=product.price;
    }
    return total;
   }

   let result=getTotal([{name:"Coffee mug",price:300},{name:"Soap",price:33}]);
   console.log(result);
   