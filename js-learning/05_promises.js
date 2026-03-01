const Raj = new Promise(()=>{});
console.log(Raj)  // Promise { <pending> } by default promise is pending
console.log(typeof Raj)  //Output: Object
const Emi = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Chaicode")
    },3000)   // will be executed 3 second later
})
console.log(Emi)   //Promise {'Chaicode'} after timeout pending
//after introducing timeout problem was console.log was getting executed first
//hence to handle promises we have .then .catch
Emi.then(value=>console.log(value)) //Chaicode


const WWE= new Promise((res,rej)=>{
    res("Roman is the Champion")
    rej(new Error("Cody is Champion"))
})
WWE.then(data=>data.toUpperCase())
   .then(data=>console.log(data))
   .catch(error=>console.log(error)); //then can be nested


const cond1 = Promise.reject("Need to fight Jey Uso")
const cond2 = Promise.reject("Need to do Cheating")
const cond3 = Promise.resolve("Will win the Universal Championship")  // these type of promised are instantly resolved
Promise.any([cond1, cond2, cond3])     // any will give you the output of resolved promise as soon as it encounters it
  .then(result => console.log(result))
  .catch(error => console.log(error));
//Output :Will win the Universal Championship
const romanWin = Promise.resolve("Roman retains the Universal Championship")
const jeyWin = Promise.resolve("Jey won against Kevin")
const usoWin = Promise.resolve("Usos won the tag title")
Promise.all([romanWin,jeyWin,usoWin])
       .then(result => console.log(result))
       .catch(error => console.log(error)); 
//Output [
//   'Roman retains the Universal Championship',
//   'Jey won against Kevin',
//   'Usos won the tag title'
// ]
const Brock = Promise.reject("Brock became No.1 Contender")
const John = Promise.reject("John returned at Money in the Bank")
const Win = Promise.resolve("Retained Universal Championship")
Promise.allSettled([Brock,John,Win])
       .then(value=>console.log(value));
/*Output:[
  { status: 'rejected', reason: 'Brock became No.1 Contender' },
  { status: 'rejected', reason: 'John returned at Money in the Bank' },
  { status: 'fulfilled', value: 'Retained Universal Championship' }
]
*/ 
//i have full blog on this check it out:https://learnwebd.hashnode.dev/a-story-of-control-power-and-chaos-js-promises