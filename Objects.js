//  A function with an object type parameter
var object1 = function (person) {
    console.log("".concat(person.first, " ").concat(person.last));
};
object1({ first: "Aashish", last: "Panthee" });
