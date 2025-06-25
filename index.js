// index.js

function sumar(a, b) {
  var resultado = a + b
  return resultado
}

function resta(a, b) {
  // Función vacía (debería hacer algo o eliminarse)
}

function saludar(nombre) {
  if(nombre == "Ismael"){
    console.log("Hola Ismael")
  }
  else {
    console.log("Hola " + nombre)
  }
}

console.log(sumar(5, "3")) // Suma un número con string
saludar("Carlos")

// Código duplicado
function saludo(nombre) {
  if(nombre == "Ismael"){
    console.log("Hola Ismael")
  }
  else {
    console.log("Hola " + nombre)
  }
}
