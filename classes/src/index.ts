class Player{
    public readonly first:string;
    public readonly last:string;
    public score:number=0;
    private age:number=33;
    private secret:number=444;
    protected name:string="Aashish"
    constructor(first:string,last:string){
        this.first=first;
        this.last=last;
        this.secretMethod();
    }
    private secretMethod():void{
        console.log("Secret Method")
    }
    get fullName():string{
        return `${this.first} ${this.last}`
    }
    set setSecretNumber(newNumb:number){
        this.secret=newNumb;
    }
}
const doggy=new Player("CoCo","Panthee");
console.log(doggy);
console.log(doggy.first+doggy.last);
console.log(doggy.fullName)
doggy.setSecretNumber=44;
console.log(doggy);
class newPlayer extends Player{
    gettingName():string{
        return this.name;
    }
}
const Nimo=new newPlayer("Ben","Panthee");
console.log(Nimo);
console.log(Nimo.gettingName());


interface Colorful{
    color:string;
}
interface Printable{
    print():void;
}

class Animal implements Colorful{
    constructor(public color:string){
        this.color=color;
    }
}
const puppy=new Animal("blue");
console.log(puppy);

class Dog implements Colorful,Printable{
    constructor(public brand:string,public color:string){
        this.color=color;
        this.brand=brand;
    }
    print():void{
        console.log(`${this.color} is not printable`)
    }
}
const lucky=new Dog("Prada","Red");
console.log(lucky);
console.log(lucky.print());
