function calculate() {
    
    let consumptionTotal = 0;
    
        for(let i=0; i<consumption.length-1; i++){
        consumptionTotal += parseFloat(consumption[i].value);
        consumptionTotal = Math.floor(consumptionTotal*100)/100;
        }

        
console.log(consumptionTotal)
document.getElementById("consumptionTotal").innerHTML = consumptionTotal;
}


