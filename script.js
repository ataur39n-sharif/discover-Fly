// full function of plus minus btn

function btnClick(classType, increase) {
    const seatInput = document.getElementById(classType);
    const seatInputValue = parseInt(seatInput.value);
    let newSeatInputValue = seatInputValue;
    if (increase == true) {
        newSeatInputValue = seatInputValue + 1;
    }
    if (increase == false && seatInputValue > 0) {
        newSeatInputValue = seatInputValue - 1;
    }
    seatInput.value = newSeatInputValue;
    grandtotal();

}

//grandtotal cost function

function grandtotal() {
    const firstClassInput = document.getElementById("firstClassSeatNumber");
    const firstClassInputValue = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById("economyClassSeatNumber");
    const economyClassInputValue = parseInt(economyClassInput.value);

    const totalCost = firstClassInputValue * 150 + economyClassInputValue * 100;

    document.getElementById("subtotal").innerText = "$" + totalCost;

    const tax = totalCost * 0.1;
    document.getElementById("tax").innerText = "$" + Math.round(tax);

    const total = totalCost + tax;
    document.getElementById("grandtotal").innerText = total;
}

//bookNow btn function

function booknow() {
    const grandtotal = document.getElementById("grandtotal").innerText;
    const grandtotalValue = parseInt(grandtotal);

    const FirstClassTicket = document.getElementById("firstClassSeatNumber").value;
    const EconomyTicket = document.getElementById("economyClassSeatNumber").value;

    const section1 = document.getElementById("section1")
    const section2 = document.getElementById("section2")

    if (grandtotalValue > 0) {
        swal("Success!", "Your purchase is Successful.Let's see your order summery.", "success");
        section1.style.display = "none";
        document.getElementById("EconomyTicket").innerText = EconomyTicket;
        document.getElementById("FirstClassTicket").innerText = FirstClassTicket;
        document.getElementById("cost").innerText = "$" + grandtotalValue;
        section2.style.display = "block";
    }
    else {
        swal("Error!", "Please select minimum 1 seat", "error");
    }
}

// back to home btn function

function homeBtnClick() {

    const section2 = document.getElementById("section2");
    section2.style.display = "none";

    const section1 = document.getElementById("section1");
    section1.style.display = "block";
}