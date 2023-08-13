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
