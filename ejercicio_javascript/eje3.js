function verificarNumeros(){
   
    // lista que recibirá  a los números del usuario
    var seleccion_usuario = [];

    for(let i = 1; i<=6; i++){
        seleccion_usuario[i-1] = parseInt(document.getElementById(`numero${i}`).value)
    }
    console.log(seleccion_usuario.join(", "))
  

    // llama a la función no_repetidos y recibe a los repetidos para obtener el largo más tarde
    var duplicados  = no_repetidos(seleccion_usuario);

    // llama a la función no_mayor_a_90 para comprobar que ninguno de los números 
    // ingresados por el usuario sea mayor a 90
    var valor_max_correcto = no_mayor_a_90(seleccion_usuario);
   // console.log(duplicados.join(", "))

   //crea la variable en donde se imprimará los resultados 
    var muestraResultado = document.getElementById('resultado_loteria');

    // comprueba si todos los parámetros anteriores se cumplen
    // que no haya repetidos y que estén entre 1 y 90
    // si no ocurre no avanza el juego
    if(duplicados.length===0 && valor_max_correcto === true){
        var numerosGanadores = ganadoresAlAzar();

        // variable para verificar si nuestros numero son los ganadores
        var compararWinUS = [];

       // ciclo para obtener cuantos números del usuario son iguales a los ganadores
        for(let i=0; i<seleccion_usuario.length; i++){
            if(numerosGanadores.includes(seleccion_usuario[i])){
                compararWinUS.push(seleccion_usuario[i]);
            }
        }

        // de aquí en adelante se muestran los resultados
        // ganadores
        muestraResultado.innerHTML = '<p>Números sorteados: ' + numerosGanadores.join(', ') + '</p>';
        // si ninguno calzó
        if (compararWinUS.length === 0) {
            muestraResultado.innerHTML += '<p>No has acertado ningún número. ¡Inténtalo de nuevo!</p>';
            // o si obtuvo algunos
        } else {
            muestraResultado.innerHTML += '<p>¡Felicidades! Has acertado los siguientes números: ' + compararWinUS.join(', ') + '</p>';
        }
    } else {
        muestraResultado.innerHTML = '<p>Tiene números repetidos o alguno es mayor a 90 o menor que 1, <br>no puede jugar mientras no los cambie</p>'
    }
}

function ganadoresAlAzar(){
    /**
     * crea números al azar que no se repiten
     */
    let ganadores = [];
    while(ganadores.length < 6){
        var numero_random = Math.floor(Math.random()*90)+1;
        if(!ganadores.includes(numero_random)){
            ganadores.push(numero_random);
        }
    }
    return ganadores;
}

function no_repetidos(lista){
    /**
     * verifica que el usuario no haya ingresado números repetidos
     */
    let duplicados = [];

    const tempArray = [...lista].sort();

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
            duplicados.push(tempArray[i]);
        }
    }
    return duplicados;
    
}

function no_mayor_a_90(lista){
    /**
     * verifica que el usuario no haya ingresado números mayores que 90
     * ya que 90 es el límite para la lotería
     */
    var comprobar = true;
    for(var i = 0; i<lista.length; i++){
        if(lista[i] > 90 || lista[i] <= 0){
            console.log("Mayor que 90");
            comprobar = false;
        }
    }
    return comprobar;
}