var firstColumn = document.getElementById("firstColumn");

var array_of_functions = {
    "metro-cubico": cubicMetersTo,
    "litro": litersTo,
    "mililitro": mililitersTo,
    "galon-imperial": imperialGalonTo,
    "galon-estadounidense": americanGalonTo,
    "pie-cubico": cubicFeetTo,
    "pulgada-cubica": cubicInchTo
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
    localStorage.setItem("conversion-capacity", toInsert);
}

function cubicMetersTo(unitTo, value) {
    switch (unitTo) {
        case "litro":
            return value * 1000;
        case "mililitro":
            return value * 1000000;
        case "galon-imperial":
            return value * 219.969;
        case "galon-estadounidense":
            return value * 264.172;
        case "pie-cubico":
            return value * 35.3147;
        case "pulgada-cubica":
            return value * 61023.7;
        default:
            return value;
    }
}

function litersTo(unitTo, value) {
    switch (unitTo) {
        case "metro-cubico":
            return value / 1000;
        case "mililitro":
            return value * 1000;
        case "galon-imperial":
            return value * 0.219969;
        case "galon-estadounidense":
            return value * 0.264172;
        case "pie-cubico":
            return value / 28.317;
        case "pulgada-cubica":
            return value * 61.024;
        default:
            return value;
    }
}

function mililitersTo(unitTo, value) {
    switch (unitTo) {
        case "metro-cubico":
            return value / 1000000;
        case "litro":
            return value / 1000;
        case "galon-imperial":
            return value / 4546;
        case "galon-estadounidense":
            return value / 3785;
        case "pie-cubico":
            return value / 28317;
        case "pulgada-cubica":
            return value / 16.387;
        default:
            return value;
    }
}

function imperialGalonTo(unitTo, value) {
    switch (unitTo) {
        case "metro-cubico":
            return value / 220;
        case "litro":
            return value * 4.546;
        case "mililitro":
            return value * 4546;
        case "galon-estadounidense":
            return value * 1.201;
        case "pie-cubico":
            return value / 6.229;
        case "pulgada-cubica":
            return value * 277;
        default:
            return value;
    }
}

function americanGalonTo(unitTo, value) {
    switch (unitTo) {
        case "metro-cubico":
            return value / 264;
        case "litro":
            return value * 3.785;
        case "mililitro":
            return value * 3785;
        case "galon-imperial":
            return value / 1.201;
        case "pie-cubico":
            return value / 7.481;
        case "pulgada-cubica":
            return value * 231;
        default:
            return value;
    }
}

function cubicFeetTo(unitTo, value) {
    switch (unitTo) {
        case "metro-cubico":
            return value / 35.315;
        case "litro":
            return value * 28.317;
        case "mililitro":
            return value * 28317;
        case "galon-imperial":
            return value * 6.229;
        case "galon-estadounidense":
            return value * 7.481;
        case "pulgada-cubica":
            return value * 1728;
        default:
            return value;
    }
}

function cubicInchTo(unitTo, value) {
    switch (unitTo) {
        case "metro-cubico":
            return value / 61024;
        case "litro":
            return value / 61.024;
        case "mililitro":
            return value * 16.387;
        case "galon-imperial":
            return value / 277;
        case "galon-estadounidense":
            return value / 231;
        case "pie-cubico":
            return value / 1728;
        default:
            return value;
    }
}