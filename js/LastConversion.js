/*
window.onload = function () {
    var elem = document.getElementById('last-conversion');
    var conv = elem.value;
    var str = 'conversion-' + conv;
    var json = localStorage.getItem(str);
    if (json != null) {
        var obj = JSON.parse(json);
        elem.previousElementSibling.innerHTML = 'La ultima conversión:';
        elem.parentElement.classList.add('shadow');
        elem.innerHTML = obj.val + ' ' + obj.from + ' es igual a ' + obj.convertedVal + ' ' + obj.to;
    } else {
        elem.previousElementSibling.innerHTML = '';
        elem.innerHTML = '';
        elem.parentElement.classList.remove('shadow');
    }
};*/

function loadLastConversion(conv) {
    var elem = document.getElementById('last-conversion');
    var str = 'conversion-' + conv;
    var json = localStorage.getItem(str);
    if (json != null) {
        var obj = JSON.parse(json);
        elem.previousElementSibling.innerHTML = 'La ultima conversión:';
        elem.parentElement.classList.add('shadow');
        elem.innerHTML = obj.val + ' ' + obj.from + ' es igual a ' + obj.convertedVal + ' ' + obj.to;
    } else {
        elem.previousElementSibling.innerHTML = '';
        elem.innerHTML = '';
        elem.parentElement.classList.remove('shadow');
    }
}
