function calcularViagem() {

    // PEGAR VALORES

    let distancia = Number(document.getElementById("distancia").value);

    let pessoas = Number(document.getElementById("pessoas").value);

    let dias = Number(document.getElementById("dias").value);

    let transporte = document.getElementById("transporte").value;

    // VALOR POR KM

    let valorKm = 0;

    if (transporte == "carro") {
        valorKm = 0.65;
    }

    else if (transporte == "onibus") {
        valorKm = 0.25;
    }

    else if (transporte == "aviao") {
        valorKm = 1.80;
    }

    // CÁLCULOS

    let transporteTotal = distancia * 2 * valorKm;

    let hospedagem = pessoas * dias * 120;

    let alimentacao = pessoas * dias * 45;

    let total = transporteTotal + hospedagem + alimentacao;

    // MOSTRAR RESULTADO

    document.getElementById("resultado").innerHTML =

        ` <h3>Resultado da Viagem</h3>

        <p>🚗 Transporte: R$ ${transporteTotal.toFixed(2)}</p>

        <p>🏨 Hospedagem: R$ ${hospedagem.toFixed(2)}</p>

        <p>🍔 Alimentação: R$ ${alimentacao.toFixed(2)}</p>

        <hr>

        <p><strong>TOTAL: R$ ${total.toFixed(2)}</strong></p>`

        ;
}

function limparResultado() {

    // LIMPAR INPUTS

    document.getElementById("distancia").value = "";

    document.getElementById("pessoas").value = "";

    document.getElementById("dias").value = "";

    document.getElementById("transporte").selectedIndex = 0;

    // LIMPAR RESULTADO

    document.getElementById("resultado").innerHTML = "";
}

