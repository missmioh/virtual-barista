function makingCoffee(sugar, cream) {
    let order = `${sugar} sugar, ${cream} cream`;
    
    if (sugar > 0) {
        let pluralOrder = order.replace("sugar", "sugars");
        return pluralOrder;
    } else {
        return order;
    }
}

    console.log(makingCoffee('no', 'no'));
