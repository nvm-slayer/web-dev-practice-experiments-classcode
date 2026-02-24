const arr=[1,2,3,4,5,6]
const hi=arr.forEach(element => {
    console.log(element)
});
console.log(hi)//undefined as forEach never returns an element
const newArr= arr.map(x=>x**2)
console.log(newArr)

const filteredArr= arr.filter(x=>x>4)
console.log(filteredArr)
const sumOfArr = arr.reduce((acc,sum)=>{
    return acc=acc+sum

},0)
console.log(sumOfArr)

//square only even number
const squareOfEvenNumber= arr.filter(x=>x%2==0).map(x=>x**2)
console.log(squareOfEvenNumber)
//sum of squares of numbers >3
const sumOfSquares= arr.filter(x=>x>3).reduce((acc,num)=>{
    return acc=acc+num**2
},0)
console.log(sumOfSquares)
//oneline version
const oneLineSquares= arr.filter(x=>x>3).map(x=>x**2).reduce((acc,num)=>acc+num,0)
console.log(oneLineSquares)
const usingOnlyReduce= arr.reduce((acc,x)=>{
    if(x>3){
        return acc=acc+x**2;
    }return acc;
},0)
console.log(usingOnlyReduce);


const students = [
  { name: "A", marks: 40 },
  { name: "B", marks: 75 },
  { name: "C", marks: 60 },
  { name: "D", marks: 30 }
];
const passed= students.filter(students=>students.marks>50).map(students=>students.marks)
console.log(passed)
console.log(typeof students.filter)
