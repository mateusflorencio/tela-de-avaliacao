let valor = "";

function selecionado(element) {
    const id = element.id;
    let elemento = document.getElementById(id);
    let conteudo = elemento.innerText
    valor = conteudo;

    elemento.style.backgroundColor = "hsl(25, 97%, 53%)"
    elemento.style.color = "white"
}

function submeter() {
    if (valor != "") {
        let elEnd = document.getElementById("end");
        let elInico = document.getElementById("inicio");
        elInico.style.display = "none";
        elEnd.style.display = "flex"
        let elAvaliacao = document.getElementById("avaliacao")
        elAvaliacao.innerText = valor;
    } else {
        alert("Por favor, escolha uma opção de 1 a 5")
    }
}