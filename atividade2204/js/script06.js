function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    const primos = [];

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) primos.push(i);
    }

    document.getElementById("resultado").innerText = `Primos: ${primos.join(', ')}`;
}
