interface Product{
    name:string;
    price:number;
    quantity:number;
}

const printProducts=(product:Product):void=>{
console.log(`Our product is ${product.name} and quantity is ${product.quantity} and price is ${product.price}`);
}