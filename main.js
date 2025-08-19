ler numeroAleatorio = Math.floor(Math.random() *100) + 1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.qurerySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
} 

palpites.textContent += palpiteUsuario +" ";

if (palpiteUsuario === 10) {
    ultimoResultado.textContent = "Parabens! Você Acertou!";
    ultimoResultado.style.backgroudColor = "green";
    baixoOuAlto.textContent = "";
    finalizarJogo();
} else if (contagemPalpites === 10) {
    ultimoResultado.textContent = "FIM DE JOGO!!";
    baixoOuAlto.textContent = "";
    finalizarJogo();
} else {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroudColor ="red";
    if (palpiteUsuario < numeroAleatorio) {
     baixoOuAlto.textContent = "o último palpite foi muito baixo";
    } else if (palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = "o último palpite foi muito alto";
    }
}

contagemPalpites++;
campoPalpite ="";
campoPalpite.focus ();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.textContent = 'Reiniciar Jogo';
    botaoReiniciar.classList.add('botaoReiniciar');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
        paragrafoReiniciar.textContent = "";
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroudColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}