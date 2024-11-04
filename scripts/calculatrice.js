function calculer(event) {
  event.preventDefault();
  console.log("Traitement fonctionalite");

  const firstNumberValue = 1 * document.getElementById("firstNumber").value;
  const secondNumberValue = 1 * document.getElementById("secondNumber").value;
  const operatingSelect = document.getElementById("operatingSelect").value;

  let result = 15;

  console.log(firstNumberValue);
  console.log(secondNumberValue);
  console.log(operatingSelect);

  document.getElementById("result").innerHTML = `${result}`;
}
