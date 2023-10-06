
// Selecciona los elementos del formulario y el botón de envío
const nombreInput = document.getElementById("nombre");
const numeroInput = document.getElementById("numero");
const fechaInput = document.getElementById("fecha");
const cvvInput = document.getElementById("cvv");
const submitButton = document.getElementById("submit");

// Agrega escuchadores de eventos de entrada para cada campo del formulario
nombreInput.addEventListener("input", validarNombre);
numeroInput.addEventListener("input", validarNumero);
fechaInput.addEventListener("input", validarFecha);
cvvInput.addEventListener("input", validarCVV);

// Función para validar el campo de nombre
function validarNombre() {
    const nombreValue = nombreInput.value.trim();
    const nombreRegex = /^[a-zA-Z\s]{1,20}$/;

    // Comprueba si el valor del nombre coincide con la expresión regular
    if (nombreRegex.test(nombreValue)) {
    nombreInput.style.border = "1px solid green"; // Borde verde si es válido
    nombreInput.style.backgroundColor = "rgb(220, 255, 220)";
    } else {
    nombreInput.style.border = "1px solid red"; // Borde rojo si no es válido
    nombreInput.style.backgroundColor = "rgb(246, 208, 208)";
    }
    habilitarBoton(); // Verifica si se habilita el botón
}

// Función para validar el campo de número de tarjeta
function validarNumero() {
    const numeroValue = numeroInput.value.replace(/\s/g, "");
    const numeroRegexMasterCard = /^(51|52|53|54|55)\d{14}$/;
    const numeroRegexVisa = /^4\d{12}(\d{3})?$/;
    const numeroRegexAmex = /^(34|37)\d{13}$/;

    // Comprueba si el valor del número coincide con alguna de las expresiones regulares
    if (numeroRegexMasterCard.test(numeroValue)) {
    numeroInput.style.border = "1px solid green"; // Borde verde si es válido
    numeroInput.style.backgroundColor = "rgb(220, 255, 220)";
    } else if (numeroRegexVisa.test(numeroValue)) {
    numeroInput.style.border = "1px solid green"; // Borde verde si es válido
    numeroInput.style.backgroundColor = "rgb(220, 255, 220)";
    } else if (numeroRegexAmex.test(numeroValue)) {
    numeroInput.style.border = "1px solid green"; // Borde verde si es válido
    numeroInput.style.backgroundColor = "rgb(220, 255, 220)";
    } else {
    numeroInput.style.border = "1px solid red"; // Borde rojo si no es válido
    numeroInput.style.backgroundColor = "rgb(246, 208, 208)";
    }
    habilitarBoton(); // Verifica si se habilita el botón
}

// Función para validar el campo de fecha de vencimiento
function validarFecha() {
    const fechaValue = fechaInput.value.trim();
    const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    // Comprueba si el valor de la fecha coincide con la expresión regular
    if (fechaRegex.test(fechaValue)) {
    fechaInput.style.border = "1px solid green"; // Borde verde si es válido
    fechaInput.style.backgroundColor = "rgb(220, 255, 220)";
    } else {
    fechaInput.style.border = "1px solid red"; // Borde rojo si no es válido
    fechaInput.style.backgroundColor = "rgb(246, 208, 208)";
    }
    habilitarBoton(); // Verifica si se habilita el botón
}

// Función para validar el campo CVV
function validarCVV() {
    const cvvValue = cvvInput.value.trim();
    const cvvRegex = /^\d{3}$/;

    // Comprueba si el valor del CVV coincide con la expresión regular
    if (cvvRegex.test(cvvValue)) {
    cvvInput.style.border = "1px solid green"; // Borde verde si es válido
    cvvInput.style.backgroundColor = "rgb(220, 255, 220)";
    } else {
    cvvInput.style.border = "1px solid red"; // Borde rojo si no es válido
    cvvInput.style.backgroundColor = "rgb(246, 208, 208)";
    }
    habilitarBoton(); // Verifica si se habilita el botón
}

// Función para habilitar o deshabilitar el botón de envío
function habilitarBoton() {
    const inputs = [nombreInput, numeroInput, fechaInput, cvvInput];
    const allValid = inputs.every((input) => input.style.border === "1px solid green");

    if (allValid) {
    submitButton.disabled = false; // Habilita el botón si todos los campos son válidos
} else {
    submitButton.disabled = true; // Deshabilita el botón si algún campo no es válido
    }
}
