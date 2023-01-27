
let boton = document.getElementById("BotonAñadir");
boton.addEventListener("click", añadirElemento);

function añadirElemento() {
    let texto = document.getElementById("AñadirElemento").value;
    let lista = document.getElementById("lista");
    lista.innerHTML += "<li>" + texto;
    document.getElementById("AñadirElemento").value="";
}