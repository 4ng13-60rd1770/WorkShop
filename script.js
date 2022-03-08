
function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}

function obtenerResultadoImc(valorFinal) {
  if (valorFinal < 18.5) {
    return 1;
  }
  if (valorFinal >= 18.5 && valorFinal <= 24.9) {
    return 2;
  }
  if (valorFinal >= 25.0 && valorFinal <= 29.9) {
    return 3;
  }
  if (valorFinal >= 30.0 && valorFinal <= 39.9) {
    return 4;
  }
  if (valorFinal > 40) {
    return 5;
  }
}

function resetearValores() {
  for (let i = 1; i < 5; i++) {
    document.getElementById(i).style = "background: transparent; color: black";
  }
}

document
  .getElementById("formCalcularImc")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Se obtienen los valores del input
    resetearValores();
    const valorFinalHtml = document.getElementById("valorNumeroFinal");
    const edad = document.getElementById("edad").value;
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);

    // Se convierte la altura de cm a m
    const alturaEnMetros = altura / 100;
    // Se obtiene el valor redondeado, peso dividido en la altura en metros elevado al cuadrado
    const valorFinal = round(peso / Math.pow(alturaEnMetros, 2));

    // Se obtiene el resultado
    const resultadoImpreso = obtenerResultadoImc(valorFinal);

    let resultado = document.getElementById("resultado").classList;
    resultado.remove("d-none");
    resultado.add("d-block");

    valorFinalHtml.innerHTML = valorFinal;

    document.getElementById(resultadoImpreso).style =
      "background: green; color: white";
  });
