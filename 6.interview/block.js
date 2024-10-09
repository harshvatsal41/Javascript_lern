//if(true){
//    xyz
//    xyz
//}

//{}->block

let fruits = "apple";
console.log(fruits);
{
// console.log(fruits) TDZ
    let fruits;
    console.log(fruits);
    fruits = "orange";
    console.log(fruits);
        {
           console.log(fruits);
        }
    console.log(fruits);
}
console.log(fruits);

// shadowing
//illegal shadowing
//#let fruits = "apple";
console.log(fruits);
{
    // console.log(fruits) TDZ
    //#var fruits = "orange";
    console.log(fruits);
}
console.log(fruits);
