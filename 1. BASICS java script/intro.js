//print
console.log("Hello JS");
//declare variable
let a;
console.log(a);
//Js only tells you its a variable not it's type
a=10;
a=10.1; 
a='hello I am a boy';
a="Hello i am harsh verma";
a=null;
a= true;
console.log('Hello i present ->',a);

// variable types : Primitive types: number , string , boolean , null  ,symbol;
//JS-> Java ,css    


//let number=10;
//for (let i =1;i<=number;i++){
//    console.log("number is ", i);
//}
// is prime
//let number = 24;
//let flag = true;
//for(let div=2;div<number;div++){
//    if(number % div == 0){
 //       flag = false;
//        console.log(number," is not prime");
//        break;
 //   }
//}
//if(flag==true){
//console.log(number," is prime");
//}
let number = 23;
let flag=true;
for(let div=2;div<number;div++){
    if(number%div==0){
        flag=flase;
        break;
    }
}
if(flag=true){
    console.log("the number",number," is prime");
}
