let display = document.getElementById('display');
let memoryDisplay = document.getElementById('memoryDisplay');
let memoryValue = 0;  // Almacena el valor en memoria

function clearDisplay() {
    display.value = '';  // Limpia el contenido de la pantalla
}

function deleteLast() {
    display.value = display.value.slice(0, -1);  // Elimina el último carácter del display
}

function appendCharacter(character) {
    display.value += character;  // Agrega un carácter al display
}

function calculate() {
    try {
        let expression = display.value
            .replace('^', '**') // Reemplazar el símbolo de potencia por el operador de potencia de JS
            .replace('√', 'Math.sqrt'); // Reemplazar el símbolo de raíz cuadrada por la función Math.sqrt

        // Realiza el cálculo y muestra el resultado
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';  // Muestra "Error" si ocurre algún problema en la expresión
    }
}

// Funciones de Memoria
function saveToMemory() {
    let currentValue = parseFloat(display.value);  // Obtiene el valor actual del display
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;  // Suma el valor actual al valor en memoria
        memoryDisplay.textContent = `M: ${memoryValue}`;  // Actualiza la pantalla de memoria
    }
    clearDisplay();  // Limpia el display después de guardar en memoria
}

function recallMemory() {
    display.value = memoryValue;  // Recupera el valor almacenado en memoria y lo muestra
}

function clearMemory() {
    memoryValue = 0;  // Resetea el valor en memoria a 0
    memoryDisplay.textContent = 'M: 0';  // Actualiza la pantalla de memoria a 0
}

// Generar estrellas tipo * en el fondo
function createStars() {
    const starContainer = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) { // Ajusta el número de estrellas
        const star = document.createElement('div');
        star.classList.add('star');
        star.innerText = '*'; // Añadir el símbolo de estrella
        star.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        star.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duración de la caída aleatoria
        star.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio para la caída
        starContainer.appendChild(star);
    }
}

createStars(); // Llamar a la función para generar estrellas
