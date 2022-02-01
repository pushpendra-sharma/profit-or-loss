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
  if (initialPrice > finalPrice) {
    let loss = (initialPrice - finalPrice) * quantity;
    let lossPercentage = (loss / initialPrice) * 100;
    showMessage(
      outputRef,
      `Hey the loss is ${loss} and percent is ${lossPercentage}`
    );
  } else if (initialPrice < finalPrice) {
    let profit = (finalPrice - initialPrice) * quantity;
    let profitPercentage = (profit / initialPrice) * 100;
    showMessage(
      outputRef,
      `Hey the profit is ${profit} and percent is ${profitPercentage}`
    );
  } else {
    showMessage(outputRef, `Neutral`);
  }

}

function submitHandler(e) {
  e.preventDefault();
  console.log(`Hey there`);
  // deleteMessage(errorMsgRef);
  // deleteMessage(outputRef);

  const initialPriceValue = Number(initialPriceRef.value);
  const stocksQuantityValue = Number(stocksQuantityRef.value);
  const currentPriceValue = Number(currentPriceRef.value);

  calculateProfitOrLoss(
    initialPriceValue,
    stocksQuantityValue,
    currentPriceValue
  );
}

// deleteMessage(errorMsgRef);
// deleteMessage(outputRef);
submitButtonRef.addEventListener("submit", submitHandler);
