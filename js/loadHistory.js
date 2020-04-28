window.onload = function () {
    var elem;
    var json;
    for (var i = 0; i < 10; i++) {
        elem = document.getElementById("conversion" + i);
        json = localStorage.getItem("conv" + i);
        var obj = JSON.parse(json);

        elem.innerHTML = obj.val + " " + obj.from + " es igual a " + obj.convertedVal + " " + obj.to;




        //NewP = document.createElement("p"); // Create a p element
        //Text = document.createTextNode(i + ""); // Create text to go inside with string value of i
        //NewP.appendChild(Text); // Add text to p element
        //fatherElem.appendChild(NewP); // Append newly-created p element to body element in DOM tree
    }
};

/*
function loadHistory() {
    var elem;
    var json;
    for (var i = 0; i < 10; i++) {
        elem = document.getElementById("conversion" + i);
        json = localStorage.getItem("conv" + i);
        var obj = JSON.parse(json);

        elem.innerHTML = obj.value + " " + obj.from + " a " + obj.to + " " + obj.convertedVal;




        //NewP = document.createElement("p"); // Create a p element
        //Text = document.createTextNode(i + ""); // Create text to go inside with string value of i
        //NewP.appendChild(Text); // Add text to p element
        //fatherElem.appendChild(NewP); // Append newly-created p element to body element in DOM tree
    }
}*/