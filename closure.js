// Closure
function x(){
   const a=10;
    function y(){
         console.log(a);
    }
    y();
}
x();

function p(){
    var a=20;
    function q(){
        console.log(a);
    }
    return q;
}
var z=p();
z();
console.log('kkk');