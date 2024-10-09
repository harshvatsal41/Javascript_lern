//pbjects - > group of key : value ppair


//key : value -> property

//key : function -> method

let obj = {
    name:"Steve",
    lastName:"Rogers",
    addres:{
        city:"manhatten",
        state:"New York"
    },
    age:45,
    isAvenger:true,
    movies:["First Avenger","winter soldier","civil war"],
    sayHi:function () {
        console.log("can say's HI");
    }  
}

//GET
//console.log(obj.name);
//console.log(obj.age);
//console.log(obj.movies[1]);
//obj.sayHi();
////set/UPDATE
//obj.age=36;
//obj.isAvenger=false;
//obj.friend=["tony","Bruce","peter"];
//delete
//delete obj.addres;
//console.log("obj :",obj);
//
//for(let key in obj){
//    console.log(key,":",obj[key]);
//}
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];



myMusic["formats"[3]]="popat";
console.log(myMusic["formats"[3]]);
myMusic["formats"[2]]="popa";
console.log(myMusic["formats"[2]]);