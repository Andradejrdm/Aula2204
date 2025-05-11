const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    let mensagem = "";

    if (palpite < numeroSecreto) {
        mensagem = "Tente um número maior!";
    } else if (palpite > numeroSecreto) {
        mensagem = "Tente um número menor!";
    } else {
        mensagem = "Parabéns! Você acertou!";
    }

    document.getElementById("resultado").innerText = mensagem;
}
