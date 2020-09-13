//Task 1.1
var function1 = function (number){
    var arr = [];
    for(var i =0; i <number; i++){
        arr.push(i);
    }
    console.log("Array : ");
    for(var i =0; i < number; i++){
        console.log(arr[i]);
    }
}
function1(10);
//Task1.2
var function2 = function(first, second, third){
if(first%second == 0 && first%third == 0){
    console.log("True");
}else{
    console.log("False")
}
}
function2(3, 3, 3);