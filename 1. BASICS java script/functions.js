//fn deff
function sayHi(param){
    console.log("hello from sayHi");
    console.log("i want to say ",param);
    let abc = Math.random()>0.5?"chota nibba":"real nigga"
    console.log(abc);
    return  abc
}
//fn call
sayHi();
sayHi(10);
sayHi("love you");

let rval = sayHi([1,2,3,4,5]);
console.log("rval",rval);