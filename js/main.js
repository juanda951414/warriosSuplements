const obtenerNombreCompleto = (nombre, apellido) =>{
  return nombre + ", " + apellido;
};

const obtenerDetalleDeRegistro = (name,surName,email,supplement) => {
  return (obtenerNombreCompleto(name, surName) +
   ", con correo electrónico: " + email + 
   ". Dejó el siguiente mensaje: " + supplement);
};

let respuestUsuario = prompt("¿Quieres recibir las últimas novedades de nuestros productos?");
while (respuestUsuario.trim().toUpperCase() === "SI"){

let nombres = prompt("¿Cuál es tú nombre?");
let apellidos = prompt("¿Cuál es tú apellido?");
let correo = prompt("¿Cuál es tú correo electrónico?");
let suplemento = prompt("¿Cuál es tú suplemento favorito?");

alert("¡Gracias por registrarte! Te llegara a tu correo todas las novedades de nuestros productos 👍");

console.log(
  "El usuario " +
   obtenerDetalleDeRegistro(nombres, apellidos, correo, suplemento)
);
respuestUsuario = prompt("¿Quiere hacer otro registro?")
}