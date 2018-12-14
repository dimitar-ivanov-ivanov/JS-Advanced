function attachEventsListeners() {
    let distancesMap = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    let convert = document.getElementById('convert');

    convert.addEventListener('click', convertUnits);

    function convertUnits() {
        let inputDistance = document.getElementById('inputDistance');
        let outputDistance = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let inputToMeters = distancesMap[inputUnits] * +inputDistance.value;
        let distance = inputToMeters / distancesMap[outputUnits];
        outputDistance.value = distance;
    }
}
