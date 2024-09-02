function fibonacciSequence(n) {
  let sequence = [0, 1];
  while (sequence[sequence.length - 1] < n) {
    let nextValue =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);
  }
  return sequence;
}

function verificarFibonacci() {
  let numero = parseInt(document.getElementById("numero").value);
  if (isNaN(numero)) {
    document.getElementById("resultado").textContent =
      "Por favor, insira um número válido.";
    return;
  }

  let sequence = fibonacciSequence(numero);
  if (sequence.includes(numero)) {
    document.getElementById(
      "resultado"
    ).textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    document.getElementById(
      "resultado"
    ).textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}
