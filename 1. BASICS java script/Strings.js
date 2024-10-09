//let singleQuotes ='single quoted strings';
//let doubleQuotes = "double quoted string ";
//console.log(singleQuotes);
//console.log(doubleQuotes);
//let str = singleQuotes.charAt(4);
//let substr = doubleQuotes.substring(2,8);
//console.log(str);
//console.log(substr);
//charCodeAt = ascii
//let ascii = singleQuotes.charCodeAt(5);
//console.log(ascii);
//split and joint
let abc = "I'm a little tea pot";
let splitted = abc.split(" ");
console.log(splitted);
//let joined = splitted.join("+");
//console.log(joined);
//let joined = splitted.join("$");
//console.log(joined);
console.log(splitted[0]);
let i = 0;
for (i;i<splitted.length;i++){
    let a = splitted[i].charCodeAt(0);
    console.log(a);
    if(a<123&&a>96){
        let b = a-32;
        splitted[i] = splitted[i].replace(splitted[i].charAt(0),String.fromCharCode(b));
    }
}
console.log(splitted);
console.log(splitted.join(" "));