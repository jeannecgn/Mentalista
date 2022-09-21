var numeroSecreto = parseInt(Math.random() * 11);
var chances = 3;
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute < 0 || chute > 10) {
    elementoResultado.style.display = "block";
    resultado.innerHTML = "Você deve digitar um número de 0 a 10";
    return;
  }

  if (chances == 0) {
    elementoResultado.style.display = "block";
    resultado.innerHTML =
      "Suas chances acabaram atualize a página e tente novamente.";
    return;
  }

  if (chute == numeroSecreto) {
    elementoResultado.style.display = "block";
    resultado.innerHTML = "Parabéns!Você acertou.";
  } else if (chute > numeroSecreto) {
    chances--;
    elementoResultado.style.display = "block";
    resultado.innerHTML =
      "Errou, o número sorteado é menor, você tem mais " + chances + " chances";
  } else if (chute < numeroSecreto) {
    chances--;
    elementoResultado.style.display = "block";
    resultado.innerHTML =
      "Errou, o número sorteado é maior, você tem mais " + chances + " chances";
  }
}
