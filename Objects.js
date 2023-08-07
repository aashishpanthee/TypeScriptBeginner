// Object type annotation
var coordinate = { x: 20, y: 50 };
//  A function with an object type parameter
var object1 = function (person) {
    console.log("".concat(person.first, " ").concat(person.last));
};
object1({ first: "Aashish", last: "Panthee" });
var person1 = { firstName: "Aashish", lastName: "Panthee", grade: 12 };
console.log(person1);
// Type alias with function parameter
var printPerson = function (person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " reads in class ").concat(person.grade));
};
printPerson({ firstName: "Aashish", lastName: "Panthee", grade: 12 });
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var poi = doublePoint({ x: 10, y: 10 });
console.log(poi);
