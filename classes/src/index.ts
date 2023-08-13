class Player{
    first:string;
    last:string;
    constructor(first:string,last:string){
        this.first=first;
        this.last=last;
    }
}
const doggy=new Player("CoCo","Panthee");
console.log(doggy);
console.log(doggy.first+doggy.last);
