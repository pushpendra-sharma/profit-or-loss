const initialPriceRef = document.querySelector("#initial-price");
const stocksQuantityRef = document.querySelector("#stocks-quantity");
const currentPriceRef = document.querySelector("#current-price");
const submitButtonRef = document.querySelector("#btn-submit");
const outputRef = document.querySelector("#output");
const errorMsgRef = document.querySelector(".error-msg");

function showMessage(element, text = "") {
  return (element.innerText = text);
}

function deleteMessage(element) {
  return (element.innerText = "");
}

function calculateProfitOrLoss(initialPrice, quantity, finalPrice) {
  let msg = "";
  if (initialPrice > finalPrice) {
    let loss = ((initialPrice - finalPrice) * quantity).toFixed(2);
    let lossPercentage = ((loss / initialPrice) * 100).toFixed(2);
    msg = `Hey the loss is ${loss} and percent is ${lossPercentage}%`;
  } else if (initialPrice < finalPrice) {
    let profit =((finalPrice - initialPrice) * quantity).toFixed(2);
    let profitPercentage = ((profit / initialPrice) * 100).toFixed(2);
    msg = `Hey the profit is ${profit} and percent is ${profitPercentage}%`;
  } else {
    msg = `No Profit No Loss`;
  }
  return msg;
}

function submitHandler(e) {
  e.preventDefault();
  deleteMessage(errorMsgRef);
  deleteMessage(outputRef);

  const initialPriceValue = Number(initialPriceRef.value);
  const stocksQuantityValue = Number(stocksQuantityRef.value);
  const currentPriceValue = Number(currentPriceRef.value);

  let message = calculateProfitOrLoss(
    initialPriceValue,
    stocksQuantityValue,
    currentPriceValue
  );
  showMessage(outputRef, message);
}

submitButtonRef.addEventListener("click", submitHandler);
