const tColores = {
  Rojo:   0,
  Verde:  1,
  Azul:   2,
  Dorado: 3,
  Blanco: 4,
  Marron: 5,
  Naranja: 6,
};

const tModo = {
    Sencillo: 1,
    Dificil: 2,
};

const MAX_COLORES_SEQ = 10;
const MAX_COLORES_FACIL = 3;
const MAX_COLORES_DIFICIL = 6;
const MAX_AYUDAS = 3;

const readline = require("readline");

function pregunta(rl, texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

function charToColor(color) {
    if (color === "r" || color === "R") {
        return tColores.Rojo;
    } else if (color === "v" || color === "V") {
        return tColores.Verde;
    } else if (color === "a" || color === "A") {
        return tColores.Azul;
    } else if (color === "d" || color === "D") {
        return tColores.Dorado;
    } else {
        return null;
    }
}

function intToColor(numero) {
    if (numero === 0) {
        return tColores.Rojo;
    } else if (numero === 1) {
        return tColores.Verde;
    } else if (numero === 2) {
        return tColores.Azul;
    } else if (numero === 3) {
        return tColores.Dorado;
    } else {
        return null;
    }
}

function mostrarColor(color) {
    if (color === tColores.Rojo) return "Rojo";
    if (color === tColores.Verde) return "Verde";
    if (color === tColores.Azul) return "Azul";
    if (color === tColores.Dorado) return "Dorado";
    return "";
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

function comprobarColor(secuenciaColores, indice, color) {
    return secuenciaColores[indice] === color;
}

function mostrarSecuencia(secuenciaColores, numero) {
    let texto = "Secuencia numero " + numero + ": ";
    let i = 0;

    while (i < numero) {
        texto = texto + mostrarColor(secuenciaColores[i]);
        if (i < numero - 1) texto = texto + " - ";
        i = i + 1;
    }

    console.log(texto);
    console.log("Memoriza la secuencia y pulsa Enter para continuar...");
}

async function comenzarJuego(nombre, rl) {
    let secuencia = generarSecuencia(3);
    let longitudActual = 3;
    let jugando = true;

    while (jugando === true && longitudActual <= MAX_COLORES_SEQ) {

        mostrarSecuencia(secuencia, longitudActual);

        await pregunta(rl, "");

        console.clear();

        console.log(nombre + ", introduce la secuencia de " + longitudActual + " colores:");
        console.log("(R = Rojo, V = Verde, A = Azul, D = Dorado)");

        let i = 0;

        while (i < longitudActual && jugando === true) {

            let colorUsuario = null;

            while (colorUsuario === null) {
                let resp = await pregunta(rl, "Color " + (i + 1) + ": ");
                colorUsuario = charToColor(resp);

                if (colorUsuario === null) {
                    console.log("Color no válido");
                }
            }

            if (comprobarColor(secuencia, i, colorUsuario) === false) {
                console.log("Has fallado la secuencia numero " + longitudActual + ".");
                jugando = false;
            }

            i = i + 1;
        }

        if (jugando === true) {
            console.log("Enhorabuena, has acertado la secuencia numero " + longitudActual + ".");
            longitudActual = longitudActual + 1;
        }
    }

    if (longitudActual > MAX_COLORES_SEQ) {
        console.log("Has ganado");
    }
}

async function main() {
  process.stdin.resume();
  const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
  });

  console.log("¡Bienvenido a Simon dice!");
  const nombre = await pregunta(rl, "¿Cuál es tu nombre? ");
  console.log(`Hola ${nombre}, pulsa una tecla para empezar a jugar.`);

  await pregunta(rl, "");
  await comenzarJuego(nombre, rl);

  rl.close();
}

main().catch(console.error);

function mostrarColorV2(color) {
    if (color === tColores.Rojo) return "Rojo";
    if (color === tColores.Verde) return "Verde";
    if (color === tColores.Azul) return "Azul";
    if (color === tColores.Dorado) return "Dorado";
    if (color === tColores.Blanco) return "Blanco";
    if (color === tColores.Marron) return "Marrón";
    if (color === tColores.Naranja) return "Naranja";
    return "";
}
 
function charToColorV2(color) {
    if (color === "x" || color === "X") return "ayuda";
    if (color === "r" || color === "R") return tColores.Rojo;
    if (color === "v" || color === "V") return tColores.Verde;
    if (color === "a" || color === "A") return tColores.Azul;
    if (color === "d" || color === "D") return tColores.Dorado;
    if (color === "b" || color === "B") return tColores.Blanco;
    if (color === "m" || color === "M") return tColores.Marron;
    if (color === "n" || color === "N") return tColores.Naranja;
    return null;
}
 
function intToColorV2(numero) {
    if (numero === 0) return tColores.Rojo;
    if (numero === 1) return tColores.Verde;
    if (numero === 2) return tColores.Azul;
    if (numero === 3) return tColores.Dorado;
    if (numero === 4) return tColores.Blanco;
    if (numero === 5) return tColores.Marron;
    if (numero === 6) return tColores.Naranja;
    return null;
}
 
function generarSecuenciaV2(modo, numColores) {
    let numeros = [];
    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        let numeroRandom = parseInt(Math.random() * (numColores + 1));
        let color = intToColorV2(numeroRandom);
        numeros.push(color);
    }
    return numeros;
}
 
function mostrarSecuenciaV2(secuenciaColores, numero, numSecuencia) {
    let texto = "Secuencia numero " + numSecuencia + ": ";
    let i = 0;
 
    while (i < numero) {
        texto = texto + mostrarColorV2(secuenciaColores[i]);
        if (i < numero - 1) texto = texto + " - ";
        i = i + 1;
    }
 
    console.log(texto);
    console.log("Memoriza la secuencia y pulsa Enter para continuar...");
}
 
function utilizarAyuda(secuenciaColores, indice, numAyudas) {
    if (numAyudas[0] > 0) {
        numAyudas[0] = numAyudas[0] - 1;
        console.log("El siguiente color es el " + mostrarColorV2(secuenciaColores[indice]) + ". Te quedan " + numAyudas[0] + " ayudas!");
        return true;
    } else {
        console.log("No dispones de más ayudas.");
        return false;
    }
}

async function comenzarJuegoV2(nombre, modo, rl) {
    let numColores = MAX_COLORES_FACIL;
    let leyenda = "(R = Rojo, V = Verde, A = Azul, D = Dorado, x = Ayuda)";
 
    if (modo === tModo.Dificil) {
        numColores = MAX_COLORES_DIFICIL;
        leyenda = "(R = Rojo, V = Verde, A = Azul, D = Dorado, B = Blanco, M = Marrón, N = Naranja, x = Ayuda)";
    }
 
    let secuencia = generarSecuenciaV2(modo, numColores);
    let longitudActual = 3;
    let numSecuencia = 1;
    let jugando = true;
    let numAyudas = [MAX_AYUDAS];
 
    while (jugando === true && longitudActual <= MAX_COLORES_SEQ) {
 
        mostrarSecuenciaV2(secuencia, longitudActual, numSecuencia);
 
        await pregunta(rl, "");
 
        console.clear();
 
        console.log("Ayudas disponibles: " + numAyudas[0]);
        console.log(nombre + ", introduce la secuencia de " + longitudActual + " colores:");
        console.log(leyenda);
 
        let i = 0;
 
        while (i < longitudActual && jugando === true) {
 
            let colorUsuario = null;
 
            while (colorUsuario === null) {
                let resp = await pregunta(rl, "Color " + (i + 1) + ": ");
                let resultado = charToColorV2(resp);
 
                if (resultado === "ayuda") {
                    utilizarAyuda(secuencia, i, numAyudas);
                } else if (resultado === null) {
                    console.log("Color no válido");
                } else {
                    colorUsuario = resultado;
                }
            }
 
            if (comprobarColor(secuencia, i, colorUsuario) === false) {
                console.log("Has fallado la secuencia numero " + numSecuencia + ".");
                jugando = false;
            }
 
            i = i + 1;
        }
 
        if (jugando === true) {
            console.log("Enhorabuena, has acertado la secuencia numero " + numSecuencia + ".");
            longitudActual = longitudActual + 1;
            numSecuencia = numSecuencia + 1;
        }
    }
 
    if (jugando === true) {
        console.log("Has ganado");
    }
}