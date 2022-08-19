function updatePhoneNumebr(isIncrease) {
  const PhoneNumberField = document.getElementById("phone-number-field");
  const previousPhoneNumber = parseInt(PhoneNumberField.value);
  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    if (previousPhoneNumber > 0) {
      newPhoneNumber = previousPhoneNumber - 1;
    } else {
      newPhoneNumber = 0;
    }
  }
  PhoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById("btn-phone-plus").addEventListener("click", function () {
  const newPhoneNumber = updatePhoneNumebr(true);
  updatePhonePrice(newPhoneNumber);
  totalCount();
});

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumebr(false);
    updatePhonePrice(newPhoneNumber);
    totalCount();
  });
