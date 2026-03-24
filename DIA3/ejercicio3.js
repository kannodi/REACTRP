function _time(a, b) {
    setTimeout(() => {
        console.log(a / b)
    }, 2000);
}

_time(10, 0);

async function esperar() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });
}

async function _division(dividendo, divisor) {
    try {
        await esperar();
        if (divisor === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        console.log(dividendo / divisor);

    } catch (error) {
        console.log("Error de calculo: ", error.message)
    }
}

_division(10, 0);
