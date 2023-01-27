document.getElementById("boton").addEventListener("click",cambio);
let oscuro=false;
function cambio(){
    if(oscuro==true){
        document.getElementById("caja").style.backgroundColor= "white";
        document.getElementById("caja").style.color= "black";
        document.getElementById("boton").innerHTML = "Fondo oscuro";
        oscuro=false;
    }else{
        document.getElementById("caja").style.backgroundColor= "black";
        document.getElementById("caja").style.color= "white";
        document.getElementById("boton").innerHTML = "Fondo claro";
        oscuro=true;
    }
}