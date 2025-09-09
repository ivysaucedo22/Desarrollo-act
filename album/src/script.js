//Array (arreglo) para las imagenes, aqui va a poner las imagines//
// de cada uno (ES INDIVIDUAL) //

const imagenes = [
      
  "https://i.pinimg.com/736x/24/e0/29/24e02961efac7cd68500f8339b95efee.jpg?w=400&h=300&fit=crop",
  "https://i.pinimg.com/736x/c0/8c/78/c08c78c920e7c0ecea5bfb6f2964f8e3.jpg?w=400&h=300&fit=crop",
  "https://i.pinimg.com/736x/e3/05/e8/e305e8c0fada9628fd5f21e02219e0be.jpg?w=400&h=300&fit=crop",
  "https://i.pinimg.com/736x/c7/6d/04/c76d045642d13df1114b5a42512f1953.jpg?w=400&h=300&fit=crop",
  "https://i.pinimg.com/736x/aa/cb/64/aacb64208a6331f70698f2fea7e472ca.jpg?w=400&h=300&fit=crop"
];

//Seleccion de elementos//

const boton = document.getElementById("btn-cambiar");

const imagenCard = document.getElementById("card-img");

const textoCard = document.getElementById("card-text");

//contador de las imagenes//

let indice = 0;

// Evento del click //

boton.addEventListener("click",()=>
  {

  //lo siguiente es para que avance la foto //
  indice++;
  
  //el siguiente if es para cuando llega al final se regrese al inicio//
  
  if(indice >= imagenes.length){
    indice = 0;
 
  }
  
  // Cambiar imagen y texto //
  imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando imagen ${indice + 1} de ${imagenes.length}`;
});