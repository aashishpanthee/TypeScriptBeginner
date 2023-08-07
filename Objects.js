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
var mysong = {
    title: "Aashish", artist: "Panthee", numStreams: 100, credits: { producer: "Aashish", writer: "Panthee",
    }
};
function calculatePayout(song) {
    return song.numStreams * 1;
}
var resul = calculatePayout(mysong);
console.log(resul);
var printSong = function (song) {
    console.log("".concat(song.title, " by ").concat(song.artist, " has ").concat(song.numStreams, " streams"));
};
printSong(mysong);
var person2 = { name: "Aashish", age: 22, grade: 12 };
var person3 = { name: "Aashish", age: 22 }; /* this is also correct */
