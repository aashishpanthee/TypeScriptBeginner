// Interfaces allows us to describe the shape of objects and only objects
// Objects that have different properties and even methods in there
// We can use them to create reusabble,modular types that describe the shapes of objects
var person = {
    name: "Aashish",
    age: 22,
};
var thomas = { name: "Thomas", age: 36, id: 223 };
console.log(thomas);
// thomas.id=555;  // Cannot assign to 'id' because it is a read-only property.
