"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
}
const doggy = new Player("CoCo", "Panthee");
console.log(doggy);
console.log(doggy.first + doggy.last);
