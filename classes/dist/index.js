"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.age = 33;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("Secret Method");
    }
}
const doggy = new Player("CoCo", "Panthee");
console.log(doggy);
console.log(doggy.first + doggy.last);
