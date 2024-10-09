var varName = 10;
function fn (){
    console.log(varName);
    function b () {
        console.log(varName);
    }
    
b();
}
fn();