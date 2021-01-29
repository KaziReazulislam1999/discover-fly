// First Class Count For Increase And Decrease
function handlerFirstClassTicketChange(isIncrease) {

    const firstClassTicketInput = document.getElementById("first-class-count");
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);

    let firstClassTicketNewCount = firstClassTicketCount;

    if (isIncrease == true) {
        firstClassTicketNewCount = firstClassTicketCount + 1;
    }
    if (isIncrease == false && firstClassTicketNewCount > 0) {
        firstClassTicketNewCount = firstClassTicketCount - 1;
    }
    firstClassTicketInput.value = firstClassTicketNewCount;

}


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


// Economy Ticket Count For Increase And Decrease
function handlerEconomyTicketChange(isIncrease) {

    const economyTicketCount = document.getElementById("economy-count");
    const economyTicketInputCount = parseInt(economyTicketCount.value);

    let economyTicketNewCount = economyTicketInputCount;
    if (isIncrease == true) {
        economyTicketNewCount = economyTicketInputCount + 1;
    }
    if (isIncrease == false && economyTicketNewCount > 0) {
        economyTicketNewCount = economyTicketInputCount - 1;
    }

    economyTicketCount.value = economyTicketNewCount;
    document.getElementById("economy-count").value = economyTicketNewCount;

}


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


function calculateTotal() {

    const firstClassTicketInput = document.getElementById("first-class-count");
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);

    const economyTicketCount = document.getElementById("economy-count");
    const economyTicketInputCount = parseInt(economyTicketCount.value);

    // Subtotal Count
    const subTotal = firstClassTicketCount * 150 + economyTicketInputCount * 100;
    document.getElementById("sub-total").innerHTML = subTotal;
    
    // 10% Vat Count
    const vatAmmount = subTotal*(10/100);
    document.getElementById("vat-ammount").innerText = vatAmmount;

    // Total
    const totalAmmount = subTotal + vatAmmount ;
    document.getElementById("total-ammount").innerText = totalAmmount ;


}



// // First Class Ticket Increase
// const firstClassTicketIncreaseBtn = document.getElementById("first-class-increase");
// firstClassTicketIncreaseBtn.addEventListener("click", function () {

//     const firstClassTicketInput = document.getElementById("first-class-count");
//     const firstClassTicketCount = parseInt(firstClassTicketInput.value);
//     const firstClassTicketNewCount = firstClassTicketCount + 1;
//     firstClassTicketInput.value = firstClassTicketNewCount;

//     const firstClassTicketTotal = firstClassTicketNewCount * 150;

//     document.getElementById("sub-total").innerText = firstClassTicketTotal;

// });

// // First Class Ticket Decrease
// const firstClassTicketDecreaseBtn = document.getElementById("first-class-decrease");
// firstClassTicketDecreaseBtn.addEventListener("click", function () {

//     const firstClassTicketInput = document.getElementById("first-class-count");
//     const firstClassTicketCount = parseInt(firstClassTicketInput.value);

//     const firstClassTicketNewCount = firstClassTicketCount - 1;
//     firstClassTicketInput.value = firstClassTicketNewCount;

//     const firstClassTicketTotal = firstClassTicketNewCount * 150;

//     document.getElementById("sub-total").innerText = firstClassTicketTotal;

// });

// // Economy Ticket Increase

// const economyTicketIncreaseBtn = document.getElementById("economy-increase");
// economyTicketIncreaseBtn.addEventListener("click", function () {

//     const economyTicketCount = document.getElementById("economy-count");
//     const economyTicketInputCount = parseInt(economyTicketCount.value);
//     const economyTicketNewCount = economyTicketInputCount + 1;

//     economyTicketCount.value = economyTicketNewCount;
//     document.getElementById("economy-count").value = economyTicketNewCount;

//     const economyTicketTotalCount = economyTicketNewCount * 100;

//     document.getElementById("sub-total").innerText = economyTicketTotalCount;

// });

// // Economy Ticket Decrease

// const economyTicketdecreaseBtn = document.getElementById("economy-decrease");
// economyTicketdecreaseBtn.addEventListener("click", function () {

//     const economyTicketCount = document.getElementById("economy-count");
//     const economyTicketInputCount = parseInt(economyTicketCount.value);
//     const economyTicketNewCount = economyTicketInputCount - 1;

//     economyTicketCount.value = economyTicketNewCount;
//     document.getElementById("economy-count").value = economyTicketNewCount;

//     const economyTicketTotalCount = economyTicketNewCount * 100;

//     document.getElementById("sub-total").innerText = economyTicketTotalCount;

// });