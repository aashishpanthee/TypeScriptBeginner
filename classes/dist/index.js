"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.age = 33;
        this.secret = 444;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("Secret Method");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set setSecretNumber(newNumb) {
        this.secret = newNumb;
    }
}
const doggy = new Player("CoCo", "Panthee");
console.log(doggy);
console.log(doggy.first + doggy.last);
console.log(doggy.fullName);
doggy.setSecretNumber = 44;
console.log(doggy);
