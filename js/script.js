var AC = document.getElementById("AC");
var addSub = document.getElementById("addSub");
var back = document.getElementById("back");
var div = document.getElementById("div");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var mul = document.getElementById("mul");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var sub = document.getElementById("sub");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var add = document.getElementById("add");
var zero = document.getElementById("zero");
var point = document.getElementById("point");
var equal = document.getElementById("equal");
var equation = document.getElementById("equation");
var result = document.getElementById("result");

var out, operator;

AC.addEventListener('click',()=>{
    equation.innerText = "";
    result.innerText = "";
})

back.addEventListener('click', ()=>{
    equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    output();
})

addSub.addEventListener('click',()=>{
   operator = equation.innerText.substring(equation.innerText.length - 1, equation.innerText.length);
   if(operator == '*' || operator == '/' || operator == ''){
       equation.innerText = equation.innerText + "-";
   }
   else if(operator == '+' || operator == '-'){
       equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
   }
   output();
})

one.addEventListener('click',()=>{
    equation.innerText += "1";
    output();
})

two.addEventListener('click',()=>{
    equation.innerText += "2";
    output();
})

three.addEventListener('click',()=>{
    equation.innerText += "3";
    output();
})
    
four.addEventListener('click',()=>{
    equation.innerText += "4";
    output();
})

five.addEventListener('click',()=>{
    equation.innerText += "5";
    output();
})

six.addEventListener('click',()=>{
    equation.innerText += "6";
    output();
})

seven.addEventListener('click',()=>{
    equation.innerText += "7";
    output();
})
    
eight.addEventListener('click',()=>{
     equation.innerText += "8";
     output();
})
    
nine.addEventListener('click',()=>{
    equation.innerText += "9";
    output();
})

zero.addEventListener('click',()=>{
    equation.innerText += "0";
    output();
})

point.addEventListener('click',()=>{
    operator = equation.innerText.substring(equation.innerText.length - 1, equation.innerText.length);
    if(operator == "."){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    }
    else{
        equation.innerText += ".";
    }
    output();
})

div.addEventListener('click',()=>{
    operator = equation.innerText.substring(equation.innerText.length - 1, equation.innerText.length);
    if (operator == "/" || operator == ""){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    }
    else if(isNaN(parseInt(operator))){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1) + "/";
    }
    else{
        equation.innerText += "/";
    }
    output()
})

mul.addEventListener('click',()=>{
    operator = equation.innerText.substring(equation.innerText.length - 1, equation.innerText.length);
    if (operator == "*" || operator == ""){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    }
    else if(isNaN(parseInt(operator))){
    equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1) + "*";
        }
    else{
        equation.innerText += "*";
    }
    output()
})

sub.addEventListener('click',()=>{
    operator = equation.innerText.substring(equation.innerText.length - 1, equation.innerText.length);
    if (operator == "-" || operator == ""){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    }
    else if(isNaN(parseInt(operator))){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1) + "-";
    }
    else{
        equation.innerText += "-";
    }
    output();
})

add.addEventListener('click',()=>{
    operator = equation.innerText.substring(equation.innerText.length - 1, equation.innerText.length);
    if (operator == "+" || operator == ""){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1);
    }
    else if(isNaN(parseInt(operator))){
        equation.innerText = equation.innerText.substring(0, equation.innerText.length - 1) + "+";
    }
    else{
        equation.innerText += "+";
    }
    output();
})

equal.addEventListener('click',()=>{
    output();
    equation.innerText = "";
    result.style.fontSize = "3rem";
})

function output(){
    operator = equation.innerText.substring(equation.innerText.length - 1, equation.innerText.length);
    if(isNaN(parseInt(operator)) || parseInt(operator) == undefined){
        out = eval(equation.innerText.substring(0,equation.innerText.length - 1));
    }
    else{
        out = eval(equation.innerText);
    }
    if(equation.innerText.length == 1){
        result.style.fontSize = "2rem";
    }
    if(out != undefined)
    result.innerText = out;
    else{
        result.innerText = "";
    }
}