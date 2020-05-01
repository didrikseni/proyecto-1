var firstColumn = document.getElementById("firstColumn");

var array_of_functions = {
    "bit": bitTo,
    "byte": byteTo,
    "kilobyte": kilobyteTo,
    "megabyte": megabyteTo,
    "gigabyte": gigabyteTo,
    "terabyte": terabyteTo
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
    localStorage.setItem("conversion-dataSize",toInsert);
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