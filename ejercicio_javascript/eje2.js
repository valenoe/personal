    // crea el número aleatorio que se deberá adivinar
   var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    var intentos = 0;

    function adivinarNumero() {
      // recibe el n° del jugador
      var guess = parseInt(document.getElementById('guessInput').value, 10);
      intentos++;

      // crea la variable con la cual se mostrará si el resultado está correcto, si es muy alto o muy bajo y si no es un número
      // esta última existe porque algunos navegadores permiten el ingreso de texto aún cuando el input tiene type="number"
      var resultadoDiv = document.getElementById('resultado');
      //console.log(guess)

      // Cuando el número ingresado es muy algo o muy bajo se le da una pista.
      if (guess === numeroAleatorio) {
        resultadoDiv.innerHTML = `<p class="text-success">¡Felicidades! Adivinaste el número en ${intentos} intentos.</p>`;
        resultadoDiv.innerHTML += '<button class="btn btn-primary" onclick="reiniciarJuego()">Jugar de nuevo</button>';
        document.getElementById('guessInput').disabled = true;
      } else if (guess < numeroAleatorio) {
        resultadoDiv.innerHTML = '<p class="text-info">El número ingresado es demasiado bajo. ¡Inténtalo nuevamente!</p>';
        resultadoDiv.innerHTML += pista()
      } else if (guess > numeroAleatorio) {
        resultadoDiv.innerHTML = '<p class="text-info">El número ingresado es demasiado alto. ¡Inténtalo nuevamente!</p>';
        resultadoDiv.innerHTML += pista()
      } else {
        resultadoDiv.innerHTML = '<p class="text-info">Eso no es un número. ¡Inténtalo nuevamente!</p>';

      }
    }

    function reiniciarJuego() {
      /**genera un nuevo n° aleatorio
       * limpia la entrada y resultado del juego
       * también le permite ingresar un número nuevo al jugador
       */
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      intentos = 0;
      document.getElementById('guessInput').value = '';
      document.getElementById('guessInput').disabled = false;
      document.getElementById('resultado').innerHTML = '';
    }

    function pista(){
      /**Genera un n° aleatorio entre el 0 y el 10
       * retorna la lista con el índice seleccionado aleatoriamente 
       * La lista contienen pistas para adivinar el °, son ejercicios pequeños
       * hay una trampa que es multiplicar por 0. */ 
        var indice_pista = Math.floor(Math.random()*10);
        
        var lista = [
            '<p class="text-info">Si lo divides por 4 da ' + numeroAleatorio/4 + '</p>',
            '<p class="text-info">Si le sumas 26 da ' + (numeroAleatorio+26) + '</p>',
            '<p class="text-info">Es el ' + numeroAleatorio*100/70 + '% de 70 </p>',
            '<p class="text-info">Es el ' + numeroAleatorio*100/14 + '% de 14</p>',
            '<p class="text-info">Si lo multiplicas por 0 da ' + numeroAleatorio*0 + '</p>', /*pista trampa*/ 
            '<p class="text-info">Si lo metemos en la función f(x) = 2X + 4 entonces da ' + (numeroAleatorio*2 + 4) + '</p>',
            '<p class="text-info">Si derivas x^numeroAleatorio entonces tendrías ' + numeroAleatorio + 'x^' + (numeroAleatorio-1) + '</p>',
            '<p class="text-info">Si derivas e^x(numeroAleatorio) entonces tendrías ' + numeroAleatorio + 'e^x' + numeroAleatorio + '</p>',
            '<p class="text-info">Si le restas 59 da ' + (numeroAleatorio-59) + '</p>',
            '<p class="text-info">Si le sumas 71 da ' + (numeroAleatorio+71) + '</p>'
          ];
        return lista[indice_pista];
        
    }