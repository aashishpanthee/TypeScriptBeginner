var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// So making individual function for each type is not good practice, sand using any type is also not good practice.
function identity(item) {
    return item;
    // here , if we pass number type then, it is not sure that it will return number type, it can return string type too.
}
//--
//--
// NOTE::::::::::::::::::GENERIC FUNCTION :::::::::::::::::::::::::::::::
// So, below here, it is generic function which can take any type of argument and return same type of argument.
function Identity(item) {
    return item;
}
// this is generic function.
var number1 = Identity(10);
console.log(number1);
var string1 = Identity("Ten");
console.log(string1);
var doggy1 = Identity({ name: "CoCo", breed: "Cocor Spinal" });
console.log(doggy1);
function getRandomElement(list) {
    var index = Math.floor(Math.random() * list.length);
    return list[index];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3, 5, 6]));
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var comboObj = merge({ name: "Rahul" }, { age: 23 });
console.log(comboObj);
