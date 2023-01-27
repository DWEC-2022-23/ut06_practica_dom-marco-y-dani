let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(e) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  if(e.target.className=="subir"){
    if(e.target.parentElement.previousElementSibling!==null){
      e.target.parentElement.after(e.target.parentElement.previousElementSibling)
    }
  }
  if(e.target.className=="bajar"){
    if(e.target.parentElement.nextElementSibling!==null){
      e.target.parentElement.before(e.target.parentElement.nextElementSibling)
    }

  }
  if(e.target.className=="borrar"){
    e.target.parentElement.remove();
  }
 }

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  if (listDiv.style.display == 'none'){
    listDiv.style.display = 'block';
  }else{
    listDiv.style.display = 'none';
  }
 }

 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  descriptionP.innerHTML = descriptionInput.value;
 }

 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  listUl.innerHTML += "<li>" + addItemInput.value;
  let num = listDiv.querySelector('ul').children.length;
  attachListItemButtons(lis[num-1]);
  document.getElementsByClassName("addItemInput")[0].value="";
 }


