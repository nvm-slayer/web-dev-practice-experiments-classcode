console.log(this) //{}
console.log(typeof this)//object
function experimentingwiththis(){
    "use strict"
    return this //undefined
}
console.log(experimentingwiththis()) //this is an important interview question in strict mode the answer is undefined but in non-strict mode it refers to the global object
const role="winner"
const name= "India"
const CricketTeam ={
    name:"Pakistan",
    role:"joker",
    introduce(){
        return `Introducing the ${role} of cricket world cup team ${name}`
    }

}
console.log(CricketTeam.introduce()) // without the use of this Output:Introducing the winner of cricket world cup team India as in js first the variable name is searched inside the function then in the global scope
const CricketTeam2 ={
    name:"Pakistan",
    role:"joker",
    introduce(){
        console.log( `Introducing the ${this.role} of cricket world cup team ${this.name}`)
        function innerTeam(){
            console.log(`${this.name} not able to reach here`);

        }innerTeam();
    }

}
CricketTeam2.introduce()//output:Introducing the joker of cricket world cup team Pakistan
rName="krsna" //by declaring this way rName is getting attached to global object and hence this.rName works perfectly fine
function rapper(){
    console.log(this.rName)
}

const emiway = {
    profession:"youtuber",
    introduce(){
    const lover =()=>{console.log(`${this.profession}`)}
    lover()
}}
emiway.introduce()
