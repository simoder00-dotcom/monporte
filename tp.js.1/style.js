function somme(){
var a = document.getElementById("t1").value;
var b = document.getElementById("t2").value;
var c = Number(a) + Number(b);
document.getElementById("resultat").value = c;
}
function pair()
{
	var x = document.getElementById("resultat").value
	if (x % 2 ==0){
    	document.getElementById("pair").value = " Nombre Pair "
	}
	else{
    	document.getElementById("pair").value = " Nombre Impair "
	}
}

function soustraction(){
var a = document.getElementById("t1").value;
var b = document.getElementById("t2").value;
var c = Number(a)-Number(b);
document.getElementById("resultat").value = c;
}









function multiplier(){
var a = document.getElementById("t1").value;
var b = document.getElementById("t2").value;
var c = Number(a) * Number(b);
document.getElementById("resultat").value = c;
}
function division(){
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    var out = document.getElementById("resultat");

    if (b === 0) {
        out.value = "Division Impossible par 0";
        return;
    }
out.value = a / b;
}

function soustraire(){
  var a = document.getElementById("t1").value;
var b = document.getElementById("t2").value;
var c = Number(a) - Number(b);
document.getElementById("resultat").value = c;  
}
function permute(){
var a = document.getElementById("t1");
var b = document.getElementById("t2");
var tmp = a.value;
a.value=b.value;
b.value=tmp;
}
function clearall(){
document.getElementById("t1").value = "";
document.getElementById("t2").value = "";
document.getElementById("pair").value = "";
document.getElementById("resultat").value = "";
}
