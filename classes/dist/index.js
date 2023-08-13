"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.age = 33;
        this.secret = 444;
        this.name = "Aashish";
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
class newPlayer extends Player {
    gettingName() {
        return this.name;
    }
}
const Nimo = new newPlayer("Ben", "Panthee");
console.log(Nimo);
console.log(Nimo.gettingName());
class Animal {
    constructor(color) {
        this.color = color;
        this.color = color;
    }
}
const puppy = new Animal("blue");
console.log(puppy);
class Dog {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.color} is not printable`);
    }
}
const lucky = new Dog("Prada", "Red");
console.log(lucky);
console.log(lucky.print());
