var output = function(){
//const button = document.getElementById('button');
let input = document.getElementById('input');
let  result = document.getElementById('output');
button.addEventListener("click", e=> result.innerText = input.value)
}

output();