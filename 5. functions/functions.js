
//types of function ->
//function statement
//define
//function sayhello(param){
//    console.log("hello");
//}
//fn invocation 
//sayhello();

//sayhello("Hello");
// console.log("");
// sayHello([1, 2, 3, 4, 5]);
// sayHello({ name: "Jasbir" });
// console.log("`
// let rval = sayHello();
// console.log("rval", rVal); 
// function are first class citizens
// function are treated as a variable
//assignment
//log("hello i am harsh");
//let log = console.log;
//function fd(){
//    console.log("hello i am a function");
//}
//function expression
//let engulf = fd();
//engulf;
//anonimus function
//let fuckedup = function (){
//    console.log('shush dude no body gonna know about this');
//    console.log("gotchaaaaa!!!");
//}
//fuckedup ();


//IIFE -> immediately invoked function expression//
// require,pollution,
//(function hello(){
//    console.log("I am IIFE");
//  console.log("i will run on my own")
//})();

//Arrow function -> syntax,react,this
let fn = (num) => {
    return num*num
}
console.log(fn(8));