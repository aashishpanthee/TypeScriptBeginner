class Player{
    public readonly first:string;
    public readonly last:string;
    public score:number=0;
    constructor(first:string,last:string){
        this.first=first;
        this.last=last;
    }
}
const doggy=new Player("CoCo","Panthee");
console.log(doggy);
console.log(doggy.first+doggy.last);
