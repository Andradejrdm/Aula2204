function converterHoras() {
    const horas = parseFloat(document.getElementById("horas").value);
    const minutos = horas * 60;
    const segundos = horas * 3600;

    document.getElementById("resultado").innerText =
        `${horas} horas equivalem a ${minutos} minutos ou ${segundos} segundos.`;
}
