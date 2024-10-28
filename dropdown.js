let dropdownCount = 1;

function createDropdown(dropdown) {
    let dropdownCount = parseInt(dropdown.id.replace('appliance', '')) || 1;
    let container = document.getElementById('dropdownContainer');
    let newDropdown = document.createElement('div');
    newDropdown.className = 'dropdown';
    newDropdown.innerHTML = `

    <form oninput="consumption.value=
            Math.floor(appliance.value*100) / 100 * Math.floor(parseFloat(useHours.value) * 100) / 100">
        <div id="dropdownContainer">
            <div class="dropdown">
                <select type ="number" id="appliance" onchange="createDropdown(this)">
                    <option value=0>Select</option>
                    <option value=0>Other Appliance or Specify Wattage</option>
                    <option value=1.5>Portable heater (1500W)</option>
                    <option value=0.73>Air Conditioner (Window/wall) (8kBTU) (120V)</option>
                    <option value=1.5>Water Heater (Tank Type) (Estimate)</option>
                    <option value=0.17>Water Heater Instantaneous (110 v 29 amp @1gpm 70°F)</option>
                    <option value=2.3>Oven</option>
                    <option value=1.5>Surface Oven</option>
                    <option value=1.5>Microwave Oven</option>
                    <option value=0.4>Coffee Maker</option>
                    <option value=1.5>Dishwasher (Does not include water heater)</option>
                    <option value=0.4>Toaster</option>
                    <option value=0.75>Toaster Oven</option>
                    <option value=0.17>Refrigerator, 15 cu. ft.</option>
                    <option value=0.02>Freezer (if not opened)</option>
                    <option value=0.071>Television (40"–50" LED/4k UHD)</option>
                    <option value=0.019>Television (30"–40"  LED/HDTV/1080P)</option>
                    <option value=0.15>Desktop Computer (150 Watt)</option>
                    <option value=0.04>Monitor (17" LCD)</option>
                    <option value=0.04>Laptop Computer</option>
                    <option value=0.04>LED bulb (20 W) (75 W incandescent equivalent per bulb) </option>
                    <option value=2.3>Washing Machine (warm wash, cold rinse)</option>
                </select>

                &nbsp;&nbsp;&nbsp;Watts:&nbsp;<input type="number" id="applianceEdit" value="updateApplianceEdit(dropdown)" min="0" step="100" oninput="editAppliance()">

                &nbsp;&nbsp;&nbsp;Hours of Use:&nbsp;<input type="number" id="useHours" value="0" min="0" step="0.25">

                &nbsp;&nbsp;&nbsp;Consumption (kWh):&nbsp;<output type="number" id="consumption" for="appliance useHours"></output>

                `;
    container.appendChild(newDropdown);
    calculate(); // Call the calculate function to update the total consumption


    function updateDropdown() {
        createDropdown(document.getElementById('appliance'));
        updateApplianceEdit();
    }

    function updateApplianceEdit(dropdown) {
        document.getElementById('appliance').value = dropdown.value;
    }
}



