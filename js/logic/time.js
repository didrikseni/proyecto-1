var firstColumn = document.getElementById("firstColumn");

var array_of_functions = {
    "milisegundo": milisecondTo,
    "segundo": secondTo,
    "minuto": minuteTo,
    "hora": hourTo,
    "dia": dayTo,
    "semana": weekTo,
    "mes": monthTo,
    "año": yearTo
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
    localStorage.setItem("conversion-time",toInsert);
}

function milisecondTo(unitTo, value) {
    switch (unitTo) {
        case "segundo":
            return value / 1000;
        case "minuto":
            return (value / 60000);
        case "hora":
            return value / 3600000;
        case "dia":
            return value / 86400000;
        case "semana":
            return value / 604800000;
        case "mes":
            return value / 2628000000;
        case "año":
            return value / 31540000000;
        default:
            return value;
    }
}

function secondTo(unitTo, value) {
    switch (unitTo) {
        case "milisegundo":
            return value * 1000;
        case "minuto":
            return value / 60;
        case "hora":
            return value / 3600;
        case "dia":
            return value / 86400;
        case "semana":
            return value / 604800;
        case "mes":
            return value / 2628000;
        case "año":
            return value / 31540000;
        default:
            return value;
    }
}

function minuteTo(unitTo, value) {
    switch (unitTo) {
        case "milisegundo":
            return value * 60000;
        case "segundo":
            return value / 60;
        case "hora":
            return value / 3600;
        case "dia":
            return value / 1440;
        case "semana":
            return value / 10080;
        case "mes":
            return value / 43800;
        case "año":
            return value / 525600;
        default:
            return value;
    }
}

function hourTo(unitTo, value) {
    switch (unitTo) {
        case "milisegundo":
            return value * 3600000;
        case "segundo":
            return value * 3600;
        case "minuto":
            return value * 60;
        case "dia":
            return value / 24;
        case "semana":
            return value / 168;
        case "mes":
            return value / 730;
        case "año":
            return value / 8760;
        default:
            return value;
    }
}

function dayTo(unitTo, value) {
    switch (unitTo) {
        case "milisegundo":
            return value * 86400000;
        case "segundo":
            return value * 86400;
        case "minuto":
            return value * 1440;
        case "hora":
            return value * 24;
        case "semana":
            return value / 7;
        case "mes":
            return value / 30.417;
        case "año":
            return value / 365;
        default:
            return value;
    }
}

function weekTo(unitTo, value) {
    switch (unitTo) {
        case "milisegundo":
            return value * 604800000;
        case "segundo":
            return value * 604800;
        case "minuto":
            return value * 10080;
        case "hora":
            return value * 168;
        case "dia":
            return value * 7;
        case "mes":
            return value / 4.345;
        case "año":
            return value / 52,143;
        default:
            return value;
    }
}

function monthTo(unitTo, value) {
    switch (unitTo) {
        case "milisegundo":
            return value * 2628000000;
        case "segundo":
            return value * 2628000;
        case "minuto":
            return value * 43800;
        case "hora":
            return value * 730;
        case "dia":
            return value * 30,417;
        case "semana":
            return value * 4.345;
        case "año":
            return value / 12;
        default:
            return value;
    }
}

function yearTo(unitTo, value) {
    switch (unitTo) {
        case "milisegundo":
            return value * 31540000000;
        case "segundo":
            return value * 31540000;
        case "minuto":
            return value * 525600;
        case "hora":
            return value * 8760;
        case "dia":
            return value * 365;
        case "semana":
            return value * 52,143;
        case "año":
            return value * 12;
        default:
            return value;
    }
}