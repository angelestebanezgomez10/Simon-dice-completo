 tColores (enumerado)
const tColores = {
  Rojo:   0,
  Verde:  1,
  Azul:   2,
  Dorado: 3,
};

const MAX_COLORES_SEQ = 10;

const readline = require("readline");

function pregunta(rl, texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

function charToColor(letra) {
  if (letra == "r" || letra == "R") return tColores.Rojo;
  if (letra == "v" || letra == "V") return tColores.Verde;
  if (letra == "a" || letra == "A") return tColores.Azul;
  if (letra == "d" || letra == "D") return tColores.Dorado;
  return null;
}

function intToColor(numero) {
  switch (numero) {
    case 0: return tColores.Rojo;
    case 1: return tColores.Verde;
    case 2: return tColores.Azul;
    case 3: return tColores.Dorado;
    default: return null;
  }
}

function generarSecuencia(numColores) {
  let numeros = [];
  for (let i = 0; i < MAX_COLORES_SEQ; i++) {
    let numeroRandom = parseInt(Math.random() * (numColores + 1));
    let color = intToColor(numeroRandom);
    numeros.push(color);
  }
  return numeros;
}

