const nome = "Lucas de Oliveira";
const vagaDesejada = "Sou um ambicioso desenvolvedor backend";
const h1 = document.querySelector(".myNameText");
const h2 = document.querySelector(".myJobText");

function textoAnimado() {
    let index = 0;
    let index2 = 0;
    const intervalo = setInterval(() => {
        if (index < nome.length) {
            h1.innerHTML += nome[index];
            index++;
        } else {
            clearInterval(intervalo);
        }
    }, 200)
    const novoIntervalo = setInterval(() => {
        if (segundoIndex < vagaDesejada.length) {
            h2.innerHTML += vagaDesejada[index2];
            index2++;
        } else {
            clearInterval(novoIntervalo)
        }
    }, 200)
}
window.onload = textoAnimado;
