function inverterString() {
  const str = document.getElementById("inputString").value;

  let strInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  document.getElementById(
    "resultado"
  ).textContent = `String invertida: ${strInvertida}`;
}
