/* Edit: document.querySelector() -> document.form[] */
var formulario = document.forms["form"]

/* Edit: .onsubmit -> .addEventListener("submit") */
formulario.addEventListener( "submit", (e) => {

  /* Edit: prevent -> preventDefault() */
  e.preventDefault();
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}
);

/* Remove: button */

/* Edit: Arrow function */
const agregarInvitado = (nombre, edad, nacionalidad) => {

  if (nacionalidad === "AR") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "MX") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "VNZL") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "PER") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
/* Edit: added -> add */
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

/* Remove: unnecessary variables*/

/* Edit: Arrow function */
const crearElemento = (descripcion, valor) => {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}