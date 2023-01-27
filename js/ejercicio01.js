document.getElementById("button").addEventListener("click",cambio);

function cambio(){
    const color = document.getElementById("colour").value;
    document.getElementsByTagName("h1")[0].style.color=color;
}