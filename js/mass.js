var firstColumn = document.getElementById("firstColumn");

var array_of_functions = {
    "tonelada": tonsTo,
    "kilogramo": kilogramsTo,
    "gramo": gramsTo,
    "miligramo": miligramsTo,
    "libra": poundsTo,
    "onza": ounceTo,
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
    }
    return convertedValue;
}

function tonsTo(unitTo, value) {
    switch (unitTo) {
        case "kilogramo":
            return value * 1000;
        case "gramo":
            return value * 1000000;
        case "miligramo":
            return value * 1000000000;
        case "libra":
            return value * 2204.62;
        case "onza":
            return value / 35274;
        default:
            return value;
    }
}

function kilogramsTo(unitTo, value) {
    switch (unitTo) {
        case "tonelada":
            return value / 1000;
        case "gramo":
            return value * 1000;
        case "miligramo":
            return value * 1000000;
        case "libra":
            return value * 2.20462;
        case "onza":
            return value * 35.274;
        default:
            return value;
    }
}

function gramsTo(unitTo, value) {
    switch (unitTo) {
        case "kilogramo":
            return value / 1000;
        case "tonelada":
            return value / 1000000;
        case "miligramo":
            return value * 1000;
        case "libra":
            return value / 453.592;
        case "onza":
            return value / 28.3495;
        default:
            return value;
    }
}

function miligramsTo(unitTo, value) {
    switch (unitTo) {
        case "kilogramo":
            return value * 1000000;
        case "gramo":
            return value * 1000;
        case "tonelada":
            return value * 1000000000;
        case "libra":
            return value / 453592;
        case "onza":
            return value / 28349.5;
        default:
            return value;
    }
}

function poundsTo(unitTo, value) {
    switch (unitTo) {
        case "kilogramo":
            return value / 2.20462;
        case "gramo":
            return value * 453.592;
        case "miligramo":
            return value * 453592;
        case "tonelada":
            return value / 2204.62;
        case "onza":
            return value * 16;
        default:
            return value;
    }
}

function ounceTo(unitTo, value) {
    switch (unitTo) {
        case "kilogramo":
            return value * 35.274;
        case "gramo":
            return value / 28.3495;
        case "miligramo":
            return value * 28349.5;
        case "libra":
            return value / 16;
        case "tonelada":
            return value / 35274;
        default:
            return value;
    }
}