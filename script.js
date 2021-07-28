let digitalElement = document.querySelector('.digital');

function updateRelogio() {
    let atual = new Date();
    let hora = atual.getHours();
    let minutos = atual.getMinutes();
    let segundos = atual.getSeconds();

    digitalElement.innerHTML = `${fixarZero(hora)}:${fixarZero(minutos)}:${fixarZero(segundos)}`;
}

function fixarZero(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

setInterval(updateRelogio, 1000);