let name = "Lucas de Oliveira"

function textoLegal() {
    setTimeout(() => {
        for (let index = 0; index < name.length; index++) {
            document.getElementById("nome").innerHTML += name.charAt(index);
        }
    }, 1000)
}
