var cant=document.getElementById("cantidad").value=0;
var b1=document.getElementById("bolsillo1").value="";
var b2=document.getElementById("bolsillo2").value="";
var b3=document.getElementById("bolsillo3").value="";
/* validacion de formulario */

var boton=document.getElementById("btn-wallet");
var botonRecarga=document.getElementById("btn-recarga")
var cliente=document.getElementById("usuario");
var pass=document.getElementById("password");
var sald=document.getElementById("saldo");
var inv1=document.getElementById("ext1").value;
inv1=parseInt(inv1);
console.log(inv1)
var inv2=document.getElementById("ext2").value; 
inv1=parseInt(inv2);
console.log(inv2)
var inv3=document.getElementById("ext3").value;   
inv1=parseInt(inv3);      
console.log(inv3)   


cant.innerHTML=cant.innerHTML+0;

boton.addEventListener("click",dirigir);
botonRecarga.addEventListener("click",recarga);

var total=0;

function dirigir(){
    var cant=document.getElementById("cantidad").value;
    var cant=parseInt(cant);
    var b1=document.getElementById("bolsillo1").value;
    var b2=document.getElementById("bolsillo2").value;
    var b3=document.getElementById("bolsillo3").value;
    
    sald.innerHTML="";
    if(cant>0){
        total+=cant;
        sald.innerHTML=sald.innerHTML+total;
        alert("registro exitoso, dirigente al tu bolsillo");
        document.location.href="#bol3";
    }else{
        alert("por favor ingrese sus ingresos");
        sald.innerHTML=sald.innerHTML+"";
        console.log(cant)
    }
    /* nombrar bolsillos */
        document.getElementById("bol1").innerHTML=b1;
        document.getElementById("bol2").innerHTML=b2;
        document.getElementById("bol3").innerHTML=b3;
    
    return total;
}


function recarga(){
    var v1=document.getElementById("valor1")
    var v2=document.getElementById("valor2")
    var v3=document.getElementById("valor3")

    v1.innerHTML=inv1;  
    v2.innerHTML=inv2; 
    v3.innerHTML=inv3; 
}