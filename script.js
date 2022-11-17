const juego = {
    // 1. Agrega la propiedad timerId
    timerId: 0,
    // 2. Agrega la propiedad gravedad
    gravedad: 2,
  
    // 3. Agrega el método aleatorio()
    aleatorio: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  

    // 12. Agrega el método loop()
    loop: function () {
      bird.efectoGravedad(),
      bird.dibujar(),
      juego.verificaColision()
    },
  
    // 13. Agrega el método iniciar()
    iniciar: function() {
     document.addEventListener("keyup", bird.mover)
    }
  
  };
  



const bird = {
    // 4. Agrega la propiedad div
  div: document.querySelector(".bird"),

    // 5. Agrega la propiedad bottom
   bottom: juego.aleatorio(10,570)

    // 6. Agrega la propiedad left
    left: 250,

    // 7. Agrega la propiedad width
    width: 60,

    // 8. Agrega la propiedad height
    height: 45,
     
    // 9. Agrega el método efectoGravedad()
    efectoGravedad: function () {
    bird.bottom = bird.bottom - juego.gravedad
    },
  
    // 10. Agrega el método dibujar()
    dibujar: function () {
      bird.div.style.bottom = bird.bottom +"px"
    },

    // 11. Agrega el método mover()
    mover: function(){
     bird.bottom + 40

}
   

// llama a juego.iniciar()
juego.iniciar()
