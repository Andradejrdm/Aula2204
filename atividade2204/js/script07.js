function validarCPF() {
    let cpf = document.getElementById("cpf").value.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        document.getElementById("resultado").innerText = "CPF inválido!";
        return;
    }

    const calcDig = (base, peso) => {
        let soma = 0;
        for (let i = 0; i < base.length; i++) {
            soma += parseInt(base[i]) * (peso - i);
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const dig1 = calcDig(cpf.slice(0, 9), 10);
    const dig2 = calcDig(cpf.slice(0, 9) + dig1, 11);

    if (cpf.endsWith(`${dig1}${dig2}`)) {
        document.getElementById("resultado").innerText = "CPF válido!";
    } else {
        document.getElementById("resultado").innerText = "CPF inválido!";
    }
}
