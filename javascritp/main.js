function playSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function(){
        playSom('#som_tecla_pom')
    };
    contador = contador + 1;
    console.log(contador);
}




//[tecla_pom, tecla_clap, tecla_tim, tecla_puff, tecla_splash, tecla_toim, tecla_psh, tecla_tic, tecla_tom]
