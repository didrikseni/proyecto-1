var firstColumn = document.getElementById("firstColumn");
var secondColumn = document.getElementById("secondColumn");

var array_of_functions = {
    "bit": bitTo,
    "byte": byteTo,
    "kilobyte": kilobyteTo,
    "megabyte": megabyteTo,
    "gigabyte": gigabyteTo,
    "terabyte": terabyteTo
}

function convert(element) {
    if (firstColumn.contains(element)) {
        fromContainer = document.getElementById("fromUnit");
        toContainer = document.getElementById("toUnit");
        fromValue = element.value;
        toValue = document.getElementById("toValue");
    } else {
        fromContainer = document.getElementById("toUnit");
        toContainer = document.getElementById("fromUnit")
        fromValue = element.value;
        toValue = document.getElementById("fromValue");
    }
    calculate(fromContainer, toContainer, fromValue, toValue);
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
    calculate(fromContainer, toContainer, value, toRefresh);
}

function calculate(fromContainer, toContainer, value, toValue) {
    if (isNaN(value)) {
        alert("Debe ingresar un valor válido!");
    } else {
        unitFrom = fromContainer.options[fromContainer.selectedIndex].value;
        unitTo = toContainer.options[toContainer.selectedIndex].value;
        convertedValue = array_of_functions[unitFrom](unitTo, value);
        toValue.value = convertedValue;
    }    
}

function bitTo(unitTo, value) {
    switch (unitTo) {
        case "byte":
            return value / 8;
        case "kilobyte":
            return value / 8000;
        case "megabyte":
            return value / 8000000;
        case "gigabyte":
            return value / 8000000000;
        case "terabyte":
            return value / 8000000000000;
        default:
            return value;
    }
}

function byteTo(unitTo, value) {
    switch (unitTo) {
        case "bit":
            return value * 8;
        case "kilobyte":
            return value / 1000;
        case "megabyte":
            return value / 1000000;
        case "gigabyte":
            return value / 1000000000;
        case "terabyte":
            return value / 1000000000000;
        default:
            return value;
    }
}

function kilobyteTo(unitTo, value) {
    switch (unitTo) {
        case "bit":
            return value * 8000;
        case "byte":
            return value * 1000;
        case "megabyte":
            return value / 1000;
        case "gigabyte":
            return value / 1000000;
        case "terabyte":
            return value / 1000000000;
        default:
            return value;
    }
}

function megabyteTo(unitTo, value) {
    switch (unitTo) {
        case "bit":
            return value * 8000000;
        case "byte":
            return value * 1000000;
        case "kilobyte":
            return value * 1000;
        case "gigabyte":
            return value / 1000;
        case "terabyte":
            return value / 1000000;
        default:
            return value;
    }
}

function gigabyteTo(unitTo, value) {
    switch (unitTo) {
        case "bit":
            return value * 8000000000;
        case "byte":
            return value * 1000000000;
        case "kilobyte":
            return value * 1000000;
        case "megabyte":
            return value * 1000;
        case "terabyte":
            return value / 1000;
        default:
            return value;
    }
}

function terabyteTo(unitTo, value) {
    switch (unitTo) {
        case "bit":
            return value * 8000000000000;
        case "byte":
            return value * 1000000000000;
        case "kilobyte":
            return value * 1000000000;
        case "megabyte":
            return value * 1000000;
        case "gigabyte":
            return value * 1000;
        default:
            return value;
    }
}