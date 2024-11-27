function clickButton() {
    if ( getSugar() === "" || getCream() === "" ) {
        summary.textContent = "What are you after?";
    } else {
        makingCoffee();
    }
}

function makingCoffee() {
    let choice1 = getSugar();
    let choice2 = getCream();
    let order = `${choice1} sugar, ${choice2} cream`;
    summary.textContent = order;
    
    if ( choice1 === "2" || choice1 === "3" || choice1 === "4" ) {
        let pluralOrder = order.replace("sugar", "sugars");
        summary.textContent = pluralOrder;
    } else if (choice1 === "5") {
        let sugarOrder = `only sugar, no coffee, ${choice2} cream`;
        summary.textContent = sugarOrder;
    } else {
        summary.textContent = order;
    }
    finishedCoffee();
}

function finishedCoffee() {
    let choice1 = getSugar();
    let choice2 = getCream();

    if ( choice2 === "light" || choice2 === "heavy" || choice2 === "half-and-half" ) {
        if (choice1 === "5") {
            let noCoffee = `It must be bad if you don't even like coffee...`;
            finishedOrder.textContent = noCoffee;
        } else {
            let whiteCoffee = `Here you are, your white coffee!`;
            finishedOrder.textContent = whiteCoffee;
        }
    } else {
        let blackCoffee = `Here you are, your black coffee!`;
        finishedOrder.textContent = blackCoffee;
    }
}

function getSugar() {
    return selection[0].value;
}

function getCream() {
    return selection[1].value;
}

let selection = document.querySelectorAll("select");
let summary = document.querySelector("#summary");
let finishedOrder = document.querySelector("#finished-order");
let button = document.querySelector("button");
button.addEventListener("click", clickButton);