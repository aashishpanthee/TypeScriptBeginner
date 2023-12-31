// Interfaces allows us to describe the shape of objects and only objects
// Objects that have different properties and even methods in there
// We can use them to create reusabble,modular types that describe the shapes of objects
var person = {
    name: "Aashish",
    age: 22,
};
var thomas = { name: "Thomas", age: 36, id: 223 };
console.log(thomas);
var shelby = { name: "Thomas", age: 36, greet: function () { return "Hello"; } };
console.log(shelby);
var shoes = {
    name: "Nike",
    price: 200,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.6));
var coco = {
    name: "Coco",
    age: 1.5,
    breed: "Cocor Spinal",
    bark: function () {
        return "Woof Woof";
    }
};
var chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Labrador",
    bark: function () {
        return "bark";
    },
    job: "bomb sniffer",
};
console.log(chewy);
var coco1 = {
    name: "Chewy",
    age: 4.5,
    breed: "Labrador",
    bark: function () {
        return "bark";
    },
    job: "bomb sniffer",
    lookforDrugs: function () {
        return "Drugs Drugs";
    }
};
console.log(coco1);
// Interfaces VS Type Aliases
// We cannot reopen type aliases but we can reopen interfaces
// We can extend interfaces but we cannot extend type aliases
//                      BUT
// Interfaces are used to shape only objects whereas type aliases are used to shape any type
