function calcul_moyenne(){
var n1=prompt("donner la premiere note sur 20 ")
var n2=prompt("donner la deuxieme note  sur 20")
var n3=prompt("donner la troisieme  note sur 20 ")

var somme = Number(n1)+Number(n2)+Number(n3);

document.write("voici la somme: "+somme+"<br>");
var moyenne = somme/3;
document.write("voici la moyenne:"+moyenne+"<br>");
if(moyenne<10){
    document.write("Redoublant ");
}
else if(moyenne<12){
    document.write ("Admis – Passable");
}
else if(moyenne<14){
    document.write (" Admis – Bien");
}
else if(moyenne>=14){
    document.write (" Admis – Très bien");
}
}




function calcul_temperatur(){
var n1=prompt(" saisir une température en °C")

if(n1<10){
    document.write("Froid");
}
else if(n1<=25){
    document.write ("Normal");
}
else if(25<n1){
    document.write (" Chaud");
}
}




     function calcul_comparaison(){
var n1=prompt(" saisir la premiere NOMBRE")
var n2=prompt(" saisir deuxieme NOMBRE")
if(n1<n2){
    document.write("le nombre le plus petit est  "+n1+"<br> le nombre le plus grand est  "+n2+"");
    document.write('<br><button onclick="window.location.href=\'index.html\'">Retour</button>'); }


else if(n1==n2){
    document.write ("les deux nombre egaux "+n1+"="+n2+"");
    document.write('<br><button onclick="window.location.href=\'index.html\'">Retour</button>'); }


else if(n1>n2){
    document.write (" le nombre le plus petit est  "+n2+" <br>le nombre le plus grand est  "+n1+"");
    document.write('<br><button onclick="window.location.href=\'index.html\'">Retour</button>');}}

function calcul_aleatoire(){
var chiffreSecret = Math.floor(Math.random() * 20) + 1;
var chiffreUtilisateur = parseInt(prompt("Devinez le chiffre secret (entre 1 et 20) :"));

if (chiffreUtilisateur < chiffreSecret) {
  document.write ("Votre chiffre est inférieur au chiffre secret !<br>");
   document.write ("chiffre secret :"+chiffreSecret+"<br>")
   document.write ("Nombre saisi :"+chiffreUtilisateur+"<br>")
document.write('<br><button onclick="window.location.href=\'index.html\'">Retour</button>');}
 else if (chiffreUtilisateur > chiffreSecret) {
  document.write ("Votre chiffre est supérieur au chiffre secret ! <br>");
   document.write ("chiffre secret :"+chiffreSecret+"<br>")
   document.write ("Nombre saisi :"+chiffreUtilisateur+"<br>")
document.write('<br><button onclick="window.location.href=\'index.html\'">Retour</button>');}

else if (chiffreUtilisateur === chiffreSecret) {
  document.write ("Félicitations ! Vous avez trouvé le chiffre : " + chiffreSecret);
   document.write ("chiffre secret :"+chiffreSecret+"<br>")
   document.write ("Nombre saisi :"+chiffreUtilisateur+"<br>")
document.write('<br><button onclick="window.location.href=\'index.html\'">Retour</button>');}
else {
 document.write ("Veuillez entrer un nombre valide !<br>");
   document.write ("chiffre secret :"+chiffreSecret+"<br>")
   document.write ("Nombre saisi :"+chiffreUtilisateur+"<br>")
document.write('<br><button onclick="window.location.href=\'index.html\'">Retour</button>');}


console.log("Chiffre secret :", chiffreSecret);
console.log("Chiffre saisi :", chiffreUtilisateur);


}