class Player{
    public readonly first:string;
    public readonly last:string;
    public score:number=0;
    private age:number=33;
    constructor(first:string,last:string){
        this.first=first;
        this.last=last;
        this.secretMethod();
    }
    private secretMethod():void{
        console.log("Secret Method")
    }
}
const doggy=new Player("CoCo","Panthee");
console.log(doggy);
console.log(doggy.first+doggy.last);
