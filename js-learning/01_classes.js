class Cricketer{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.matchesPlayed=0;
    }
    introduce(){
        return`Introducing ${this.name} debuting at the age of ${this.age}.`
    }
}
const Cric1= new Cricketer("Kohli",18);
const Cric2= new Cricketer("Dhoni",40);
console.log(Cric1.introduce());
console.log(Cric1,Cric2);
console.log(typeof Cric1) //It is a object
console.log(typeof Cricketer) //but this one is function
console.log(Cric2.hasOwnProperty("age"));//true




class Debutant{
    constructor(name){
        this.name=name;
        this.walkout=()=>`${this.name} has decided to walkout`
    }
}
const Cric3= new Debutant("Yashavi");
const Cric4= new Debutant("Shubham");
const Container1= Cric3.walkout();
const Container2= Cric4.walkout();
console.log(Container1,Container2)
console.log(Container1 === Container2)//false
console.log(Cric3.walkout===Cric4.walkout) //false
//false as they are sharing memory but reference is different
