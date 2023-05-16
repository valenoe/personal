function calcularDigitoVerificador() {
    const runInput = document.getElementById('runInput');
    const run = runInput.value.trim();

    if (run === '') {
        alert('Ingrese un RUN válido');
        return;
    }
  
    // Validar que el RUN sea numérico
    if (!/^\d+$/.test(run)) {
        alert('El RUN debe contener solo números');
        return;
    }
  
    // Obtener el dígito verificador calculado
    const digitoVerificador = calcularDigito(run);
  
    // Mostrar el resultado en pantalla
    const resultado = document.getElementById('resultado5');
    resultado.innerHTML = `<p>El dígito verificador calculado es: ${digitoVerificador}</p>`;
}

function calcularDigito(run) {
    const rutReversed = run.split('').reverse();
    let factor = 2;
    let suma = 0;

    for (let i = 0; i < rutReversed.length; i++) {
        suma += parseInt(rutReversed[i]) * factor;
        factor = factor >= 7 ? 2 : factor + 1;
    }

    const digito = 11 - (suma % 11);
    return digito === 11 ? '0' : digito === 10 ? 'K' : digito.toString();
}