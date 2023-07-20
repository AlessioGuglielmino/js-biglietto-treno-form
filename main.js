const targetParagraph = document.getElementById("nome-passeggero");
const sendButton = document.getElementById("send-text");
const deleteButton = document.getElementById("delete-text");

const textInput = document.getElementById("username-surname");
const kmInput = document.getElementById("km-to-do");
const ageInput = document.getElementById("user-age");

const targetCost = document.getElementById("costo-biglietto");

sendButton.addEventListener("click", function () {
  const nome = textInput.value;
  const km = kmInput.value;
  const age = ageInput.value;
  let price = km * 0.21;

  if (age < 18) {
    price = price - price * 0.2;
  } else if (age > 65) {
    price = price - price * 0.4;
  }

  targetParagraph.innerHTML = nome;
  targetCost.innerHTML = price;

  textInput.value = "";
  kmInput.value = "";
  ageInput.value = "";
});

deleteButton.addEventListener("click", function () {
  textInput.value = "";
  kmInput.value = "";
  ageInput.value = "";
});

// CHIEDO ALL'UTENTE LA SUA ETA'
// const age = prompt("inserisci la tua età");

// // CHIEDO ALL'UTENTE QUANTI KM VUOLE PERCORRERE'
// // const km = prompt("quanti km vuoi percorrere?");

// // INSERISCO I DATI INSERITI NEL MIO TARGET
// targetParagraph.innerHTML = age;
// console.log(targetParagraph);
