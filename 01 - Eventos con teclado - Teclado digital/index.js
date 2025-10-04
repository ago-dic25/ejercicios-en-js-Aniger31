let secuencia =[];
let reproducirBtn = document.getElementById('reproducirBtn');
let limpiarBtn = document.getElementById('limpiarBtn');
document.addEventListener('keydown',function(e){
    let audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`)
    audio.play();
    guardarSecuencia(e.keyCode);
});

function guardarSecuencia(codigoTecla){
    //Guardar la secuencia de sonidos reproducidos
    secuencia.push(codigoTecla);
}


function reproducirSecuencia(){
    //Reproducir la secuencia de sonidos guardados
    
    for(let i=0;i<secuencia.length;i++){
        let audioR= document.querySelector(`audio[data-key ="${secuencia[i]}"]`)
        setTimeout(function(){
            audioR.play();
        },i*500);
    }
}

function limpiarSecuencia(){
    secuencia = []
}
reproducirBtn.addEventListener('click',reproducirSecuencia);
limpiarBtn.addEventListener('click', limpiarSecuencia);