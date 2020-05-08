window.onload = function () {
    var str = 'conversion-';
    updateElement(str + 'length');
    updateElement(str + 'mass');
    updateElement(str + 'temperature');
    updateElement(str + 'dataSize');
    updateElement(str + 'time');
    updateElement(str + 'capacity');
};

function updateElement(str) {
    var elem = document.getElementById(str);
    var json = localStorage.getItem(str);
    if (json != null) {
        var obj = JSON.parse(json);
        elem.innerHTML = obj.val + ' ' + obj.from + ' es igual a ' + obj.convertedVal + ' ' + obj.to;
    }
}
