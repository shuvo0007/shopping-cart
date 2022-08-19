function subTotalCountFunction(elementId) {
  const subTotalPhoneOrCase = document.getElementById(elementId);
  const newPhoneOrCaseTotal = parseInt(subTotalPhoneOrCase.innerText);
  return newPhoneOrCaseTotal;
}

function seTextElementValuebyId(elementId, value) {
  const textElementField = document.getElementById(elementId);
  textElementField.innerText = value;
}

// ------------ total count -------------
function totalCount() {
  const currentPhoneTotal = subTotalCountFunction("phone-total");
  const currentCaseTotal = subTotalCountFunction("case-total");

  // sub total count
  const currentSubTotal = currentCaseTotal + currentPhoneTotal;
  seTextElementValuebyId("sub-total", currentSubTotal);

  // tax total count
  const totalTax = parseFloat((currentSubTotal * 0.1).toFixed(2));
  seTextElementValuebyId("tax-total", totalTax);

  // final total count
  const finalTotal = currentSubTotal + totalTax;
  seTextElementValuebyId("final-total", finalTotal);
}
