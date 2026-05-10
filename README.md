# SimonDice
Este proyecto es una versión del juego clásico Simón Dice hecha en JavaScript y ejecutada con Node.js. La idea principal ha sido practicar cosas básicas de programación como usar arrays, controlar posiciones, crear funciones y validar lo que escribe el usuario.

El juego funciona así: el programa genera una secuencia aleatoria de colores (Rojo, Verde, Azul y Dorado) que el jugador tiene que memorizar. Después se limpia la pantalla y el usuario tiene que escribir la secuencia usando la primera letra de cada color. Si acierta, la secuencia se hace más larga y sigue jugando; si falla, el juego termina. También se puede ganar si se completa la secuencia máxima.

Por dentro, los colores están representados con un objeto que hace de enumerado y la secuencia se guarda en un array de tamaño fijo. El programa está dividido en varias funciones para cosas como generar la secuencia, mostrarla, leer lo que escribe el usuario y comprobar si es correcto.

En general, es un juego que funciona en consola y permite jugar partidas completas, controlando tanto la lógica como la interacción con el usuario desde la terminal.
