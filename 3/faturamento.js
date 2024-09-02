function calcularFaturamento() {
  fetch("faturamento.json")
    .then((response) => response.json())
    .then((data) => {
      const faturamento = data.faturamento
        .filter((entry) => entry.valor > 0)
        .map((entry) => entry.valor);

      const menorFaturamento = Math.min(...faturamento);

      const maiorFaturamento = Math.max(...faturamento);

      const somaFaturamento = faturamento.reduce((acc, cur) => acc + cur, 0);
      const mediaFaturamento = somaFaturamento / faturamento.length;

      const diasAcimaDaMedia = faturamento.filter(
        (valor) => valor > mediaFaturamento
      ).length;

      document.getElementById(
        "menorFaturamento"
      ).textContent = `Menor faturamento: R$ ${menorFaturamento}`;
      document.getElementById(
        "maiorFaturamento"
      ).textContent = `Maior faturamento: R$ ${maiorFaturamento}`;
      document.getElementById(
        "diasAcimaDaMedia"
      ).textContent = `Dias com faturamento acima da média: ${diasAcimaDaMedia}`;
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
}
