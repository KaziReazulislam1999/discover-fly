//handlerTicketChange
function handlerTicketChange(ticket, isIncrease) {
  const ticketNumber = getTicketInputValue(ticket);
  let ticketNewCount = ticketNumber;

  if (isIncrease == true) {
    ticketNewCount = ticketNewCount + 1;
  }
  if (isIncrease == false && ticketNumber > 0) {
    ticketNewCount = ticketNewCount - 1;
  }
  document.getElementById(ticket + "-class-count").value = ticketNewCount;
  calculateTotal();
}

// getTicketInputValue
function getTicketInputValue(ticket) {
  const ticketInput = document.getElementById(ticket + "-class-count");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}

// calculateTotal
function calculateTotal() {
  const firstClassTicketCount = getTicketInputValue("first");
  const economyTicketInputCount = getTicketInputValue("economy");

  // Subtotal Count
  const subTotal = firstClassTicketCount * 150 + economyTicketInputCount * 100;
  document.getElementById("sub-total").innerHTML = subTotal;

  // 10% Vat Count
  const vatAmmount = subTotal * (10 / 100);
  document.getElementById("vat-ammount").innerText = vatAmmount;

  // Total
  const totalAmmount = subTotal + vatAmmount;
  document.getElementById("total-ammount").innerText = totalAmmount;
}

// Booking Success Popup
const bookingForm = document.getElementById("book-now");
bookingForm.addEventListener("click", function () {
  const firstClassPrice = getTicketInputValue("first");
  const economyPrice = getTicketInputValue("economy");

  const formArea = document.getElementById("form-area");
  formArea.style.display = "none";

  const bookingSuccess = document.getElementById("booking-succes");
  const bookingError = document.getElementById("booking-error");

  if (firstClassPrice == 0 && economyPrice == 0) {
    bookingError.style.display = "block";
  } else {
    bookingSuccess.style.display = "block";
  }
});

// // First Class Count For Increase And Decrease
// function handlerFirstClassTicketChange(ticket, isIncrease) {

//   const ticketNumber = getTicketInputValue(ticket);
//   let firstClassTicketNewCount = ticketNumber;

//   if (isIncrease == true) {
//     firstClassTicketNewCount = firstClassTicketNewCount + 1;
//   }
//   if (isIncrease == false && ticketNumber > 0) {
//     firstClassTicketNewCount = firstClassTicketNewCount - 1;
//   }
//   document.getElementById(ticket + "-class-count").value = firstClassTicketNewCount;

//   calculateTotal();
// }

// // Economy Ticket Count For Increase And Decrease
// function handlerEconomyTicketChange(ticket, isIncrease) {

//   const ticketInput = getTicketInputValue(ticket);
//   let economyTicketNewCount = ticketInput;

//   if (isIncrease == true) {
//     economyTicketNewCount = economyTicketNewCount + 1;
//   }
//   if (isIncrease == false && ticketInput > 0) {
//     economyTicketNewCount = economyTicketNewCount - 1;
//   }

//  document.getElementById(ticket + "-class-count").value = economyTicketNewCount;

//   calculateTotal();
// }

/*
// First Class Ticket Increase
const firstClassTicketIncreaseBtn = document.getElementById("first-class-increase");
firstClassTicketIncreaseBtn.addEventListener("click", function () {

    const firstClassTicketInput = document.getElementById("first-class-count");
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);

    const firstClassTicketNewCount = firstClassTicketCount + 1;

    firstClassTicketInput.value = firstClassTicketNewCount;

    const firstClassTicketTotal = firstClassTicketNewCount * 150;
    document.getElementById("sub-total").innerText = firstClassTicketTotal;

});
*/

/*
// First Class Ticket Decrease
const firstClassTicketDecreaseBtn = document.getElementById("first-class-decrease");
firstClassTicketDecreaseBtn.addEventListener("click", function () {

    const firstClassTicketInput = document.getElementById("first-class-count");
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);
    const firstClassTicketNewCount = firstClassTicketCount - 1;
    firstClassTicketInput.value = firstClassTicketNewCount;

    const firstClassTicketTotal = firstClassTicketNewCount * 150;
    document.getElementById("sub-total").innerText = firstClassTicketTotal;

});
*/

/*
// Economy Ticket Increase
const economyTicketIncreaseBtn = document.getElementById("economy-increase");
economyTicketIncreaseBtn.addEventListener("click", function () {

    const economyTicketCount = document.getElementById("economy-count");
    const economyTicketInputCount = parseInt(economyTicketCount.value);
    const economyTicketNewCount = economyTicketInputCount + 1;
    economyTicketCount.value = economyTicketNewCount;
    document.getElementById("economy-count").value = economyTicketNewCount;

    const economyTicketTotalCount = economyTicketNewCount * 100;
    document.getElementById("sub-total").innerText = economyTicketTotalCount;

});
*/

/*
// First Class Ticket Count Increase
const firstClassTicketIncreaseBtn = document.getElementById("first-class-increase");
firstClassTicketIncreaseBtn.addEventListener("click", function () {

    handlerFirstClassTicketChange(true);
    calculateTotal();

});

// First Class Ticket Count Decrease
const firstClassTicketDecreaseBtn = document.getElementById("first-class-decrease");
firstClassTicketDecreaseBtn.addEventListener("click", function () {
    handlerFirstClassTicketChange(false);
    calculateTotal();
});
*/

/*
// Economy Ticket Decrease
const economyTicketdecreaseBtn = document.getElementById("economy-decrease");
economyTicketdecreaseBtn.addEventListener("click", function () {

    const economyTicketCount = document.getElementById("economy-count");
    const economyTicketInputCount = parseInt(economyTicketCount.value);
    const economyTicketNewCount = economyTicketInputCount - 1;

    economyTicketCount.value = economyTicketNewCount;
    document.getElementById("economy-count").value = economyTicketNewCount;

    const economyTicketTotalCount = economyTicketNewCount * 100;

    document.getElementById("sub-total").innerText = economyTicketTotalCount;

});
*/

/*
// Economy Ticket Count Increase
const economyTicketIncreaseBtn = document.getElementById("economy-increase");
economyTicketIncreaseBtn.addEventListener("click", function () {

    handlerEconomyTicketChange(true);
    calculateTotal();

});

// Economy Ticket Count Decrease

const economyTicketdecreaseBtn = document.getElementById("economy-decrease");
economyTicketdecreaseBtn.addEventListener("click", function () {
    handlerEconomyTicketChange(false);
    calculateTotal();
});
*/
