function updateCaseNumebr(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const previousCaseNumber = parseInt(caseNumberField.value);
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    if (previousCaseNumber > 0) {
      newCaseNumber = previousCaseNumber - 1;
    } else {
      newCaseNumber = 0;
    }
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCasePrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumebr(true);
  updateCasePrice(newCaseNumber);
  totalCount();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumebr(false);
    updateCasePrice(newCaseNumber);
    totalCount();
  });
