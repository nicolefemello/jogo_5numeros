function realizarSoma() {
    //referência aos elementos de entrada de dados
    const inNum1 = document.getElementById('inNum1');
    const inNum2 = document.getElementById('inNum2');
    const inNum3 = document.getElementById('inNum3');
    //referência aos elementos de saída de dados
    const outNum4 = document.getElementById('outNum4');
    const outNum5 = document.getElementById('outNum5');
    const outResultado = document.getElementById('outResultado');

    //valores dos elementos
    const num1 = Number(inNum1.value);
    const num2 = Number(inNum2.value);
    const num3 = Number(inNum3.value);

    //processamento
    const num4 = 99999 - num3; //a soma dos algarismos de num3 + num4 devem sem 9
    const num5 = 99999 - num2; //a soma dos algarismos de num2+num5 devem ser 9
    const soma = num1 + num2 + num3 + num4 + num5;

    //formatar saída
    outNum4.textContent = `Número 4: ${num4}`;
    outNum5.textContent = `Número 5: ${num5}`;
    outResultado.textContent = `A soma de: ${num1} + ${num2} + ${num3} + ${num4} + ${num5} é igual = ${soma}.`;
}
    const btSoma = document.getElementById('btSoma');
    btSoma.addEventListener("click", realizarSoma);