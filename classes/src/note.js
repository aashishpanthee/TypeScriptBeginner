class Player {
  /* Score and numLives are the fields of a class . */
  #score = 0;
  //  #score is now a private field of class Player, which cannot be accessed outside of the class but can be achived using methods inside of a class
  numLives = 20;

  static description = "This is a player here";
  // This description is a static property of the class Player. It is not the property of the individual objects created from the class Player.

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
  set scores(newscore) {
    if (newscore < 0) {
      throw new Error("Score cannot be less than 0");
    }
    this.#score = newscore;
  }
  // This setter method is used to set the value of the private field #score.

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
player1.scores = 44;
// This is how we set the value of the private field #score using setter method.
console.log(player1);
console.log(player2.fullName);

class AdminPlayer extends Player {
  constructor(firstname, lastname, powers) {
    super(firstname, lastname);
    // Here if we do not call super , then there will be error because which constructor will get what will not be define.
    // here super is used to call the constructor of the parent class.
    this.powers = powers;
  }
  isAdmin = true;
}
// This is how we inherit the properties of the parent class Player to the child class AdminPlayer using extends keyword.
const player3 = new AdminPlayer("Prem", "Gautam", "Luchyang");
console.log(player3);
