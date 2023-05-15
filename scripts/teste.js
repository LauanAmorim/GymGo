function createVerticalSlide(phrases) {
  let currentPhrase = 0;
  let slideText = document.getElementById("slide-text");
  slideText.innerText = phrases[currentPhrase];

  setInterval(() => {
    currentPhrase++;
    if (currentPhrase === phrases.length) {
      currentPhrase = 0;
    }
    slideText.innerText = phrases[currentPhrase];
  }, 3000);
}

const phrases = [
  "Vontade de ficar na cama reclamando? Levanta e reclama num bom treino!",
  "Acredite que você pode, assim você já está no meio do caminho.",
  "Faça do exercício físico o seu momento do dia! Aquele em que você é a protagonista.",
  "Tem coisa melhor do sentir a evolução do esforço no nosso corpo?",
  "O cansaço de hoje é o orgulho de amanhã.",
];
createVerticalSlide(phrases);

// Cálculo do IMC
function calcularIMC() {
  let idade = document.getElementById("idade").value;
  let altura = document.getElementById("altura").value / 100;
  let peso = document.getElementById("peso").value;
  let imc = peso / (altura * altura);

  let classificacao;
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  document.querySelector('.imc-calc-result h4').textContent = imc.toFixed(1);
  document.querySelector('.imc-calc-result h3').textContent = classificacao;
}

document.querySelector('.section-imc-inputs button').addEventListener('click', calcularIMC);