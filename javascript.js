
function makingCoffee(sugar, cream) {
    let order = `${getSugar()} sugar, ${getCream()} cream`;
    summary.textContent = order;
    if (getSugar() > 1) {
        let pluralOrder = order.replace("sugar", "sugars");
        return pluralOrder;
    } else {
        return order;
    }
}

function getSugar() {
    return input[0].value;
}

function getCream() {
    return input[1].value;
}

let input = document.querySelectorAll('select');
let summary = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', makingCoffee); 
