
window.addEventListener("click",elegir);


function elegir(e) {
    let arr=[];
    let cont=0;
    if(e.target.tagName.toLowerCase()=="h3"){
        let texto = document.createElement("h2"); 
        let h3 = e.target.textContent.trim();
        let turno = e.target.parentNode.id.toLowerCase();
        let grados = 4;
        for(let i=0;i<grados;i++){
            if(e.target.nextSibling.nextSibling.childNodes[i].nodeName.toLowerCase()=="li"){
                cont++;
                arr.push(e.target.nextSibling.nextSibling.childNodes[i].textContent.trim());
            }
        }
        texto.textContent = "Has elegido " + h3 + " que se imparte en turno de " + turno  +
        " Los nº de grupos que se imparten son " + cont + ": " + arr;
        document.body.insertAdjacentElement("afterend",texto);
    }
    
}