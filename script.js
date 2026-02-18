const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    // ERRO 8: Tentando pegar valor de ID que não existe (peso)
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        // ERRO 9: Fórmula do IMC errada (está multiplicando em vez de dividir)
        // Correto: peso / (altura * altura) - notar que altura deve estar em metros
        const bmi = weight * (height * height);

        // ERRO 10: Erro de sintaxe (falta fechar parênteses ou aspas)
        document.getElementById('bmi-value').innerText = bmi.toFixed(2;
    } else {
        alert("Please fill in all fields!");
    }
});