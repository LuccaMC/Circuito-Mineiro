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

    document.getElementById("resultado").innerHTML = `

    <table class="tabela-resultado">

        <tr>
            <th>Tipo</th>
            <th>Valor</th>
        </tr>

        <tr>
            <td>🚗 Transporte</td>
            <td>R$ ${transporteTotal.toFixed(2)}</td>
        </tr>

        <tr>
            <td>🏨 Hospedagem</td>
            <td>R$ ${hospedagem.toFixed(2)}</td>
        </tr>

        <tr>
            <td>🍔 Alimentação</td>
            <td>R$ ${alimentacao.toFixed(2)}</td>
        </tr>

        <tr class="total">
            <td><strong>Total</strong></td>
            <td><strong>R$ ${total.toFixed(2)}</strong></td>
        </tr>

    </table>

`;
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

