let abc = "The quick brown fox jumped over the lazy dog";
abc = abc.split(" ");
//console.log(abc);
let i = 0;
let arr = [];
for(i;i<abc.length;i++){
    //console.log(abc[i].length);
    let b = abc[i].length;
    //console.log(b);
    arr.push(b);
}
arr.sort();
console.log(arr[arr.length-1]);