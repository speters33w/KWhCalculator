let dropdownCount = 1;

function createDropdown(selectElement) {
    if (dropdownCount < 5 && selectElement.value !== '') {
        dropdownCount++;
        let container = document.getElementById('dropdownContainer');
        const newDropdown = document.createElement('div');
        newDropdown.className = 'dropdown';
        newDropdown.innerHTML = `
                    <select id="appliance${dropdownCount}" onchange="createDropdown(this)">
                        <option value="">Select</option>
                        <option value="refrigerator">Refrigerator</option>
                        <option value="washer">Washer</option>
                        <option value="toaster">Toaster</option>
                    </select>
                    
                    <label for="hours$">Hours:</label>
                    <select id="hours$">
                        <option value=0>Select</option>
                        <option value=0.25>0.25</option>
                        <option value=0.5>0.5</option>
                        <option value=0.75>0.75</option>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                        <option value=6>6</option>
                        <option value=9>9</option>
                        <option value=12>12</option>
                        <option value=15>15</option>
                        <option value=18>18</option>
                        <option value=21>21</option>
                        <option value=24>24</option>
                    </select>
                `;
        container.appendChild(newDropdown);
    }
}