function convert() {
    const valueToConvert = parseFloat(document.getElementById('valueToConvert').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    function convertUnits(value, fromUnit, toUnit) {
        const units = {
            'byte': 1,
            'kilobyte': 1024,
            'megabyte': 1024 * 1024,
            'gigabyte': 1024 * 1024 * 1024,
            'terabyte': 1024 * 1024 * 1024 * 1024
        };

        const result = value * units[fromUnit] / units[toUnit];
        return result;
    }

    const convertedValue = convertUnits(valueToConvert, fromUnit, toUnit);
    document.getElementById('result').innerText = `${valueToConvert} ${fromUnit} = ${convertedValue} ${toUnit}`;
}