function convert() {
    const value = document.getElementById('value').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    const units = {
        'kilometers': 1000,
        'meters': 1,
        'centimeters': 0.01,
        'decimeters': 0.1,
        'millimeters': 0.001
    };

    if (!(fromUnit in units) || !(toUnit in units)) {
        console.error('Invalid units');
        return;
    }

    const result = (value * units[fromUnit]) / units[toUnit];
    document.getElementById('result').innerText = `${value} ${fromUnit} = ${result} ${toUnit}`;
}

