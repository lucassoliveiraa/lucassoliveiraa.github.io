const nome = "Lucas de Oliveira";
const h1 = document.querySelector(".myNameText");
const h2 = document.querySelector(".myJobText");

function textoAnimado() {
    let index = 0;
    const intervalo = setInterval(() => {
        if (index < nome.length) {
            h1.innerHTML += nome[index];
            index++;
        } else {
            clearInterval(intervalo);
        }
    }, 200)
}
window.onload = textoAnimado;
