//Task 1.1
var function1 = function (number){
    var arr = [number];
    for(var i =0; i <number; i++){
        arr.push(i);
    }
    console.log("Array : ");
    for(var i =0; i < number; i++){
        console.log(arr[i]);
    }
}
function1(10);