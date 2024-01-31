const form = document.querySelector(".formulario-fale-comigo");
const mascara = document.querySelector(".mascara");

function mostrarForm() {
  form.style.left = "51%";
  form.style.transform = "translateX(-50%)";
  form.style.animation = "flip 2.5s";
  mascara.style.visibility = "visible";
}
