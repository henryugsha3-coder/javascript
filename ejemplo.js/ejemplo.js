// Capturamos el formulario
const formulario = document.getElementById("formNumeros");

// Función para verificar si un número es primo
function esPrimo(n) {
    if (n <= 1) return false; // El 0, 1 y negativos no son primos
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Si es divisible por otro número, no es primo
        }
    }
    return true;
}

// Escuchamos el evento submit del formulario
formulario.addEventListener("submit", function(event) {
    // Evitamos que la página se recargue
    event.preventDefault();

    // Capturamos los números del formulario y los convertimos a enteros
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);

    let mensajeMayorMenor = "";
    let mensajePrimo1 = "";
    let mensajePrimo2 = "";

    // 1. Condicionales para saber cuál es mayor, menor o si son iguales
    if (n1 > n2) {
        mensajeMayorMenor = `El número mayor es: ${n1} y el menor es: ${n2}`;
    } else if (n2 > n1) {
        mensajeMayorMenor = `El número mayor es: ${n2} y el menor es: ${n1}`;
    } else {
        mensajeMayorMenor = `Ambos números son iguales (${n1})`;
    }

    // 2. Verificamos si el número 1 es primo
    if (esPrimo(n1)) {
        mensajePrimo1 = `El primer número (${n1}) SÍ es primo.`;
    } else {
        mensajePrimo1 = `El primer número (${n1}) NO es primo.`;
    }

    // 3. Verificamos si el número 2 es primo
    if (esPrimo(n2)) {
        mensajePrimo2 = `El segundo número (${n2}) SÍ es primo.`;
    } else {
        mensajePrimo2 = `El segundo número (${n2}) NO es primo.`;
    }

    // Mostramos los resultados en la consola del navegador
    console.log("--- RESULTADOS ---");
    console.log(mensajeMayorMenor);
    console.log(mensajePrimo1);
    console.log(mensajePrimo2);

    // Mostramos los resultados visualmente en la página web
    let contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = `
        <p><strong>${mensajeMayorMenor}</strong></p>
        <p>${mensajePrimo1}</p>
        <p>${mensajePrimo2}</p>
    `;
});