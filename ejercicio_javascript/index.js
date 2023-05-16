//CALCULADORA

// Obtener referencias a los elementos del documento HTML
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".cuadrado");

buttons.forEach((item) => {
    item.onclick = () => {
    //reconocer qué botón hace click
    if (item.id == "limpiar") {
        display.innerText = "";
    } else if (item.id === "limpiar_uno") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
        //substr devuelve la cantidad de caracteres que queramos
        // en este caso son todos menos el último
    } else if (item.id == "igual"){
        if(display.innerText != "" ){
            display.innerText = eval(display.innerText);
        } else {
            display.innerText = "Null";
        setTimeout(() => (display.innerText = ""), 2000);
        // ejecuta la función después de 2 segundos
        }
    } else if (item.id==="porcentaje"){
        // divide lo que hay en el input por 100
        if (display.innerText !== "") {
            let resultado = eval(display.innerText);
            let porcentaje = resultado / 100;
            display.innerText = porcentaje;
        }

    }else {
        // se refiere a todos los que son números, puntuación y operadores
        // +, -, *, /
        display.innerText += item.id;
    }
    };
});

