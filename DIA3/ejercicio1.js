


function _time() {
    setTimeout(() => {
        console.log("Hola")
    }, 2000);
}

async function _timeInstructions(a, b) {
    //console.log("Saludo enviado");
    await setTimeout(() => {
        try {
            if (b === 0) {
                throw new Error("No se puede dividir entre cero")
            }
            console.log(a / b)
        } catch (error) {
            console.log("Error de calculo: " + error.message)
        }
    }, 2000);
    console.log("Enviando respuesta...");
}

//_time();
_timeInstructions(10, 0);