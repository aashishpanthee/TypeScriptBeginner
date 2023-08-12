class Player {
  /* Score and numLives are the fields of a class . */
  #score = 0;
  //  #score is now a private field of class Player, which cannot be accessed outside of the class but can be achived using methods inside of a class
  numLives = 20;
  //   Constructor is a special method that is invoked when we create an instance of the class
  constructor(firstname, lastname) {
    this.firstname = firstname;
    // this keyword is used to refer to the current object like this.firstname refers to player1 object and then player2 object.
    this.lastname = lastname;
    // firstname and lastname are the properties of the individual objects created from the class.
  }
  // A getter is a special method that is used to retrieve the value of an object property.
  // It looks like like it is method,, but it is not a method. It is a property of an object.
  // we call it like , player1.fullName , not player1.fullName();
  //   In this example, the fullName getter allows you to retrieve the value of the firstname and secondname property of an object.
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  //   Methods are the functions inside of a class{
  updateScore() {
    return (this.#score += 1);
  }

  decreaseLife() {
    this.numLives -= 1;
  }
}
const player1 = new Player("Aashish", "Panthee");
const player2 = new Player("Sumit", "Chhetri");
// Objects are the instances of the class
console.log(player1);
console.log(player1.decreaseLife());
console.log(player1.updateScore());
// Particularly that #score is not accessible outside of class. If we try to access it like console.log(player1.#score) it will throw error.
console.log(player1);
console.log(player2.fullName);
