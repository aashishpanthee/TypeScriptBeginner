function triple(item:number|string){
    // type narrowing using typeof guard
    if(typeof item ==='number'){
        return item*3;
    }
    return item+item+item;
}

//Type Narrowing using Truthiness Guards
const checkWord=(word?:string)=>{
    if(word){
for(let char of word){
    console.log(char.toUpperCase());
}
    }
    else{
        console.log(`No word provided`)
    }
}

checkWord("helo");

// Type narrowing using equality guard
function someDemo(x:string|number,y:string|boolean){
    if(x==y){
        x.toUpperCase();
    }
}

// Typen Narrowing using The In Operator
interface Movie{
    title:string;
    duration:number;
};
interface TVShow{
    title:string;
    numEpisodes:number;
    episodeDuration:number;
};
function getRuntime(media:Movie|TVShow){
    if('numEpisodes' in media){
        return media.numEpisodes*media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({title:"Amadeus",duration:1220}))
console.log(getRuntime({title:"Amadeus",numEpisodes:120,episodeDuration:500}))