function calcularFatorial() {
    const num = parseInt(document.getElementById("numero").value);
    let fatorial = 1;

    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }

    document.getElementById("resultado").innerText = `Fatorial de ${num} é ${fatorial}`;
}
