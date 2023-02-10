function add() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = num1 + num2 ;
    document.getElementById("result1").innerText = result;
}
function substract(){
    var num1 = Number(document.getElementById("num3").value);
    var num2 = Number(document.getElementById("num4").value);
    var result = num1 - num2 ;
    document.getElementById("result2").innerText = result;
}


function multiply(){
    var num1 = Number(document.getElementById("num5").value);
    var num2 = Number(document.getElementById("num6").value);
    var result = num1 * num2 ;
    document.getElementById("result3").innerText = result;
}
function divide(){
    var num1 = Number(document.getElementById("num7").value);
    var num2 = Number(document.getElementById("num8").value);
    var result = num1 / num2 ;
    document.getElementById("result4").innerText = result;
}
function clearvalueadd(){
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("result1").innerText = ""
}
function clearvaluesub(){
    document.getElementById("num3").value = ""
    document.getElementById("num4").value = ""
    document.getElementById("result2").innerText = ""
}
function clearvaluemul(){
    document.getElementById("num5").value = ""
    document.getElementById("num6").value = ""
    document.getElementById("result3").innerText = ""
}
function clearvaluediv(){
    document.getElementById("num7").value = ""
    document.getElementById("num8").value = ""
    document.getElementById("result4").innerText = ""
}
