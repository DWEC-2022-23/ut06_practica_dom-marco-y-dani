
window.addEventListener("click",elegir);
let texto=false;

function elegir(e) {
    let arr=[];
    let cont=0;
    if(e.target.tagName.toLowerCase()=="h3"){
        if(texto==true){
             let ultimo = document.body.querySelector("h2:last-child");
             document.body.removeChild(ultimo);
             let ultimo2 = document.body.querySelector("h2:last-child");
             document.body.removeChild(ultimo2);
         }
        let texto1 = document.createElement("h2"); 
        let texto2 = document.createElement("h2"); 
        let h3 = e.target.textContent.trim();
        let turno = e.target.parentNode.id.toLowerCase();
        let grados = e.target.nextElementSibling.childNodes.length;
        for(let i=0;i<grados;i++){
            if(e.target.nextElementSibling.childNodes[i].nodeName.toLowerCase()=="li"){
                cont++;
                arr.push(e.target.nextElementSibling.childNodes[i].textContent.trim());
            }
        }
        texto1.textContent = "Has elegido " + h3 + " que se imparte en turno de " + turno;
        texto2.textContent = "Los nº de grupos que se imparten son " + cont + ": " + arr;
       
        document.body.appendChild(texto1);
        document.body.appendChild(texto2);
        texto=true;
    }
}