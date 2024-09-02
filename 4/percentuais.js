function calcularPercentuais() {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamento).reduce((acc, cur) => acc + cur, 0);

  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
  }

  let resultadoTexto = "Percentual de representação por estado:<br>";
  for (const estado in percentuais) {
    resultadoTexto += `${estado}: ${percentuais[estado]}%<br>`;
  }

  document.getElementById("resultado").innerHTML = resultadoTexto;
}
