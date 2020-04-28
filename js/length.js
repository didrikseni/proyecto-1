var firstColumn = document.getElementById("firstColumn");

var array_of_functions = {
    "metro": metersTo,
    "kilometro": kilometersTo,
    "milla": milesTo,
    "milimetro": milimetersTo,
    "yarda": yardsTo,
    "pie": footsTo,
    "centimetro": centimetersTo
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


function metersTo(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value / 1000;
        case "centimetro":
            return value * 100;
        case "milimetro":
            return value * 1000;
        case "yarda":
            return value * 1.09361;
        case "pie":
            return value * 3.28084;
        case "milla":
            return value / 1609.34;
        default:
            return value;
    }
}

function centimetersTo(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value / 100000;
        case "metro":
            return value / 100;
        case "milimetro":
            return value * 100;
        case "yarda":
            return value / 91.44;
        case "pie":
            return value / 30.48;
        case "milla":
            return value / 160934;
        default:
            return value;
    }
}

function kilometersTo(unitTo, value) {
    switch (unitTo) {
        case "metro":
            return value * 1000;
        case "centimetro":
            return value * 100000;
        case "milimetro":
            return value * 1000000;
        case "yarda":
            return value * 1093.61;
        case "pie":
            return value * 3280.84;
        case "milla":
            return value * 0.621371;
        default:
            return value;
    }
}

function footsTo(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value * 0.0003048;
        case "metro":
            return value * 0.3048;
        case "centimetro":
            return value * 30.48;
        case "milimetro":
            return value * 304.8;
        case "yarda":
            return value * 0.333333;
        case "milla":
            return value * 0.000189394;
        default:
            return value;
    }
}

function milesTo(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value * 1.60934;
        case "metro":
            return value * 1609.34;
        case "centimetro":
            return value * 160934;
        case "milimetro":
            return value * 1609340;
        case "yarda":
            return value * 1760;
        case "foot":
            return value * 5280;
        default:
            return value;
    }
}

function yardsTo(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value / 1093.61;
        case "metro":
            return value * 0.9144;
        case "centimetro":
            return value * 91.44;
        case "milimetro":
            return value * 914.4;
        case "milla":
            return value / 1760;
        case "pie":
            return value * 3;
        default:
            return value;
    }
}

function milimetersTo(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value / 1000000;
        case "metro":
            return value / 1000;
        case "centimetro":
            return value * 10;
        case "milla":
            return value / 1609000;
        case "yarda":
            return value * 0.00109361;
        case "pie":
            return value * 0.00328084;
        default:
            return value;
    }
}