//desafio 1//

document.getElementById(id="btn-titulo").addEventListener("click",()=>
                                                          {
  const titulo = document.getElementById("titulo");
  titulo.textContent="¡El titulo ha sido cambiado con getElementById!";
}       
                                                          );


 // Desafío 2 getElementsByClassName

document.getElementById("btn-cajas").addEventListener("click", () => {
  const cajas = document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.backgroundColor = "#27C2F5";
  
}
});

document.getElementById("btn-primera").addEventListener("click", () => {
  let primeraCaja = document.querySelector(".caja");
  if (primeraCaja) {
    primeraCaja.style.backgroundColor = "green";
  }
});