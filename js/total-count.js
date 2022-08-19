function countFunction(elementId) {
  const subTotalPhoneOrCase = document.getElementById(elementId);
  const newPhoneOrCaseTotal = parseInt(subTotalPhoneOrCase.innerText);
  return newPhoneOrCaseTotal;
}

function totalCount() {
  const currentPhoneTotal = countFunction("phone-total");
  const currentCaseTotal = countFunction("case-total");
  const currentSubTotal = currentCaseTotal + currentPhoneTotal;
  const subTotalElement = document.getElementById("sub-total");
  subTotalElement.innerText = currentSubTotal;
  // console.log(currentSubTotal);
}
