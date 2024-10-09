
//TDZ temporal dead zone
// For let /const

//uss se pehle variable assighn krne ka siraf ek hi ttareeka tha joki tha var 
//DIKAT-function scope , re declare, in case of browser it is added in window create variable pollution and buggs
//ES6 se pehle 2015
//ES6 m let aur cont aaye the 
//lets study let 
// declared 
let varname;
// Default =-> undefined ,as it does hoisting same as like var
console.log(varname);
varname = 10;
varname = 20;
//you cant re declare it as a 
// ERROR -> let varname;
  