var firstColumn = document.getElementById("firstColumn");
var secondColumn = document.getElementById("secondColumn");

var array_of_functions = {
    "metro": meters_to,
    "kilometro": kilometers_to,
    "milla": miles_to,
    "milimetro": milimeters_to,
    "yarda": yards_to,
    "pie": foots_to,
    "centimetro": centimeters_to,
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

    unitFrom = fromContainer.options[fromContainer.selectedIndex].value;
    unitTo = toContainer.options[toContainer.selectedIndex].value;

    convertedValue = calculate(unitFrom, unitTo, fromValue);

    toValue.value = convertedValue;
}

function calculate(unitFrom, unitTo, value) {
    return array_of_functions[unitFrom](unitTo,value);
}

function meters_to(unitTo, value) {
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
            return 0;
    }
}

function centimeters_to(unitTo, value) {
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
            return 0;
    }
}

function kilometers_to(unitTo, value) {
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
            return 0;
    }
}

function foots_to(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value * 0.0003048;
        case "centimetro":
            return value * 30.48;
        case "milimetro":
            return value * 304.8;
        case "yarda":
            return value * 0.333333;
        case "metro":
            return value * 0.3048;
        case "milla":
            return value * 0.000189394;
        default:
            return 0;
    }
}

function miles_to(unitTo, value) {
    switch (unitTo) {
        case "kilometro":
            return value *1.60934;
        case "metro":
            return value * 1609.34;
        case "centimetro":
            return value * 160934;
        case "milimetro":
            return value * 1609340;
        case "yarda":
            return value * 1760;
        case "milla":
            return value * 5280;
        default:
            return 0;
    }
}

function yards_to(unitTo, value) {
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
            return 0;
    }
}

function milimeters_to(unitTo, value) {
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
            return 0;
    }
}