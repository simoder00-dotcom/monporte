/*function verifierage(){
const age=document.getElementById("age").Value;
const p=document.getElementById("resultat");
console.log(age)
if (age<18)
    {p.textContent ="vous étes mineur";}
else if(age>=18 && age<=99)
    {p.textContent ="vous étes majeur";}
else{
    p.textContent="error";
}
}*/
function verifierformulaire(){
   const nom =document.getElementById("nom").Value;
    const email =document.getElementById("email").Value;
     const message=document.getElementById("message");



     if(nom===""||email===""){
        message.textContent="veillez remplir tous les champs obligatoires";
        message.style.border = "1px solid red";
     }
     else{
        message.textContent="formulaire soumis avec succés!";
        message.style.border = "1px solid green";
     }
}