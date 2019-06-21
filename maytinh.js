function add() {
    let x1=parseFloat(document.getElementById("FirstNumber").value);
    let x2=parseFloat(document.getElementById("SecondNumber").value);
    let x3= x1+x2;
    document.getElementById("ketqua").innerHTML="Result:  "+x3;

}
function sub() {
    let x1 = parseFloat(document.getElementById("FirstNumber").value);
    let x2 = parseFloat(document.getElementById("SecondNumber").value);
    let x3= x1-x2
    document.getElementById("ketqua").innerHTML = "Result:  "+x3;
}
function mul() {
    let x1 = parseFloat(document.getElementById("FirstNumber").value);
    let x2 = parseFloat(document.getElementById("SecondNumber").value);
    let x3= x1*x2
    document.getElementById("ketqua").innerHTML = "Result:  "+x3;
}
function div() {
    let x1 = parseFloat(document.getElementById("FirstNumber").value);
    let x2 = parseFloat(document.getElementById("SecondNumber").value);
    let x3= x1/x2
    document.getElementById("ketqua").innerHTML = "Result:  "+x3;
}
