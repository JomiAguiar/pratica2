function calcular() {
    let raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio) || raio <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido para o raio.";
        return;
    }

    const pi = Math.PI;
    let comprimento = 2 * pi * raio;
    let area = pi * Math.pow(raio, 2);
    let volume = (4 / 3) * pi * Math.pow(raio, 3);

    let resultadoHTML = `
        <p>Comprimento da esfera: ${comprimento.toFixed(2)}</p>
        <p>Área da esfera: ${area.toFixed(2)}</p>
        <p>Volume da esfera: ${volume.toFixed(2)}</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}