
function chefSpeciality(cuisine,pace){
    return `${this.name} has speciality in this ${cuisine} cuisine at ${pace} pace`
}
const chefName1={name:"Ranveer Brar"}
console.log(chefSpeciality.call(chefName1,"Indian","fast")) // Output:Ranveer Brar has speciality in this Indian cuisine at fast pace

function chefSpeciality2(pace){
    return `${this.name} has speciality in ${this.cuisine} cuisine at ${pace} pace`
}
const chefName3={
    name:"Raj",
    cuisine:"Chinese"
}
console.log(chefSpeciality2.call(chefName3,"fast"))
const chefName2={name:"VikasKhanna"}
const VikasKhannaDish=["Indian Dish for foreign","medium","Fast","Europe"]
console.log(chefSpeciality.apply(chefName2,VikasKhannaDish)) //no matter what apply array ke utne hi elements lega jitne function ko chahiye
