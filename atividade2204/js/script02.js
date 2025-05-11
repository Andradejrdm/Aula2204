function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    let categoria = "";

    if (idade <= 12) {
        categoria = "Criança";
    } else if (idade <= 17) {
        categoria = "Adolescente";
    } else if (idade <= 59) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }

    document.getElementById("resultado").innerText = `Você é: ${categoria}`;
}
