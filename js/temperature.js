var firstColumn = document.getElementById("firstColumn");

var array_of_functions = {
    "celcius": celciusTo,
    "farenheit": farenheitTo,
    "kelvin": kelvinTo
}

function convert(element) {
    fromValue = element.value;
    if (firstColumn.contains(element)) {
        fromContainer = document.getElementById("fromUnit");
        toContainer = document.getElementById("toUnit");
        toValue = document.getElementById("toValue");
    } else {
        fromContainer = document.getElementById("toUnit");
        toContainer = document.getElementById("fromUnit")
        toValue = document.getElementById("fromValue");
    }
    var res = calculate(fromContainer, toContainer, fromValue);
    toValue.value = res;
}

function refresh(element) {
    if (firstColumn.contains(element)) {
        fromContainer = document.getElementById("toUnit");
        toContainer = document.getElementById("fromUnit");
        toRefresh = document.getElementById("fromValue");
        value = document.getElementById("toValue").value;
    } else {
        fromContainer = document.getElementById("fromUnit");
        toContainer = document.getElementById("toUnit");
        toRefresh = document.getElementById("toValue");
        value = document.getElementById("fromValue").value;
    }
    var res = calculate(fromContainer, toContainer, value);
    toRefresh.value = res;
}

function calculate(fromContainer, toContainer, value) {
    if (isNaN(value)) {
        alert("Debe ingresar un valor válido!");
        convertedValue = 0;
    } else {
        unitFrom = fromContainer.options[fromContainer.selectedIndex].value;
        unitTo = toContainer.options[toContainer.selectedIndex].value;
        convertedValue = array_of_functions[unitFrom](unitTo, value);
        updateLastConversions(unitFrom, unitTo, value, convertedValue)
    }
    return convertedValue;
}

function updateLastConversions(unitFrom, unitTo, value, convertedValue) {
    var obj = {
        from: unitFrom,
        to: unitTo,
        val: value,
        convertedVal: convertedValue
    };
    var toInsert = JSON.stringify(obj);
    var aux = localStorage.getItem("conv" + 0)
    for (var i = 0; i < 10 && toInsert != null; i++) {
        localStorage.setItem(("conv" + i), toInsert);
        toInsert = null;
        if (aux != null) {
            toInsert = aux;
            aux = localStorage.getItem("conv" + (i + 1));
        }
    }
}

function celciusTo(unitTo, value) {
    switch (unitTo) {
        case "farenheit":
            return (value * (9 / 5)) + 32; // (°C × 9/5) + 32 = °F
        case "kelvin":
            return parseInt(value) + 273.15; // °C + 273.15 = K
        default:
            return value;
    }
}

function farenheitTo(unitTo, value) {
    switch (unitTo) {
        case "celcius":
            return (value - 32) * (5 / 9); // (°F − 32) × 5/9 = °C
        case "kelvin":
            return ((value - 32) * (5 / 9)) + 273.15; //(°F − 32) × 5/9 + 273.15 = K
        default:
            return value;
    }
}

function kelvinTo(unitTo, value) {
    switch (unitTo) {
        case "celcius":
            return value - 273.15; // K − 273.15 = °C
        case "farenheit":
            return ((value - 275.15) * (9 / 5)) + 32; //(K − 273.15) × 9/5 + 32 = °F
        default:
            return value;
    }
}