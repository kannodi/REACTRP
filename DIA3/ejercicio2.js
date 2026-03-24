/*function _time() {
    setTimeout(() => {
        console.log("Hola");
    }, 2000);
}

function esperar() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

async function _timeInstructions(a, b) {
    try {
        await esperar();
        // ✅ Ahora sí espera de verdad

        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }

        console.log(a / b);

    } catch (error) {
        console.log("Error de calculo: " + error.message);
    }

    console.log("Enviando respuesta...");
    // ✅ Ahora sí sale después de todo
}

_timeInstructions(10, 0);*/



function _time() {
    setTimeout(() => {
        console.log("Hola")
    }, 2000);
    // ✅ BIEN:
    // Usa setTimeout correctamente.
    // Imprime "Hola" después de 2 segundos.
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

    // ❌ ERROR PRINCIPAL:
    // Está usando "await setTimeout(...)" pero setTimeout NO devuelve una Promise.
    // Entonces "await" aquí NO está esperando nada realmente.
    //
    // Es decir:
    // - Cree que está esperando 2 segundos
    // - Pero en realidad setTimeout solo agenda la función y sigue
    //
    // 👉 Esto demuestra que NO entiende bien async/await todavía.

    // ❌ ERROR DE ESTRUCTURA:
    // El try/catch está DENTRO del setTimeout.
    // Eso significa que el manejo de errores no está en el flujo async real.
    //
    // En async/await, lo correcto es:
    // - esperar (await)
    // - y luego manejar errores con try/catch FUERA

    console.log("Enviando respuesta...");
    // ❌ PROBLEMA DE LÓGICA:
    // Este mensaje debería salir DESPUÉS de la espera,
    // pero como await está mal usado, el orden no es confiable.
}

//_time();

_timeInstructions(10, 0);
// ❌ RESULTADO:
// El código puede "funcionar",
// pero NO demuestra comprensión correcta de async/await ni del flujo real.