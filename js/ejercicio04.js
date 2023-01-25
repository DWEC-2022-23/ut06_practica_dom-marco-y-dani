let lista = document.getElementById("lista");
document.getElementById("b1").addEventListener("click", añadirElemento);
document.getElementById("b2").addEventListener("click", borrarUltimo);
document.getElementById("b3").addEventListener("click", borrarPrimero);

function añadirElemento() {
    let texto = document.getElementById("AñadirElemento").value;
    lista.innerHTML += "<li>" + texto;
}

function borrarUltimo() {
    let ultimo = document.querySelector("li:last-child");
    lista.removeChild(ultimo);
}

function borrarPrimero() {
    let primero = document.querySelector("li:first-child");
    lista.removeChild(primero);
}