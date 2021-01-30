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
