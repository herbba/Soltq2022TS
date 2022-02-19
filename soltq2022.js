var Tiedot = /** @class */ (function () {
    function Tiedot() {
    }
    return Tiedot;
}());
function getTiedot() {
    fetch('https://localhost:7239/Tiedot')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var pohja = document.getElementById('tiedot');
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement('div');
            var labeli = document.createElement('label');
            var value = document.createElement('p');
            pohja.append(div);
            div.append(labeli);
            div.append(value);
            labeli.textContent = data[i].timestamp.toString();
            value.textContent = data[i].value + " " + data[i].unit;
        }
    });
}
