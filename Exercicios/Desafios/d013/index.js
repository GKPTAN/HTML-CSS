let operator = '+'; 

function operation(operador) {
    let span = document.getElementById('operation');
    span.textContent = operador;
    operator = operador;
};

async function verResultado(event) {
    event.preventDefault();
    const firstNumber = Number(document.getElementById('number1').value);
    const secondNumber = Number(document.getElementById('number2').value);
    const saida = document.getElementById('saida');

    let resultado = await calcular(operator, firstNumber, secondNumber);
    saida.value = resultado;
};

async function calcular(operador, n1, n2) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case 'x':
            resultado = n1 * n2;
            break;
        case '÷':
            if (n2 !== 0) {
                resultado = n1 / n2;
            } else {
                alert("Não é possível dividir por zero!");
            };
            break;
    };

    return resultado;
};