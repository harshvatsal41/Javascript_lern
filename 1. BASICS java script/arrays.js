//array declare
//let arr = [];
let array = [1,2,3,4,5];
//console.log(array);
//console.log(array.length);
//let i=0;
//while(i<array.length){
//    console.log("elem is at idx" , i , "is", array[i]);
//    i++;
//}
//
//to add at last we use -> push
//to add things at first -> unshift
//javascript is not racist
array.push("last value");
array.unshift("first value");
console.log(array);
//to remove elements at first we use shift
//to remove elements at last we use pop
array.shift();
array.pop();
console.log(array);
//start indx,ending indx
let slicedarray = array.slice(2,4);
//ye array ki cody generate nshi krta ye sahi marray ko hi slice krdeta hai
//slice(position of array ou want to remove,how many number you are willing to remove)
array.splice(2,2);
console.log(slicedarray);
console.log(array);


