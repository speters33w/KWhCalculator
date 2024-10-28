function calculate() {
    let consumption = document.getElementsByClassName('consumption');
    let consumptionTotal = 0;

    for (let i = 0; i < consumption.length; i++) {
        consumptionTotal += parseFloat(consumption[i].value);
        consumptionTotal = Math.floor(consumptionTotal * 100) / 100;
    }

    console.log(consumptionTotal.toString());
    document.getElementById("consumptionTotal").innerHTML = consumptionTotal.toString();
}


