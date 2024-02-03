function indice() {
    var n1 = parseFloat(document.getElementById('a').value);
    var n2 = parseFloat(document.getElementById('p').value);
    if (n1 !== '' && n2 !== '') {
        var imc = n2 / ((n1/100)**2);
        var result = document.getElementById('result');
        result.innerHTML = 'Su IMC es de: ' + imc.toFixed(2);
        
        if (imc < 16) { 
            result.innerHTML += ' ~ Infrapeso: Delgadez Severa';
        } else if (16 <= imc && imc <= 16.99) { 
            result.innerHTML += ' ~ Infrapeso: Delgadez moderada'; 
        } else if (17 <= imc && imc <= 18.49) {
            result.innerHTML += ' ~ Infrapeso: Delgadez aceptable';
        } else if (18.50 <= imc && imc <= 24.99) {
            result.innerHTML += ' ~ Peso Normal';
        } else if (25.00 <= imc && imc <= 29.99) {
            result.innerHTML += ' ~ Sobrepeso';
        } else if (30.00 <= imc && imc <= 34.99) {
            result.innerHTML += ' ~ Obeso: Tipo I';
        } else if (35.00 <= imc && imc <= 40.00) {
            result.innerHTML += ' ~ Obeso: Tipo II';
        } else if (imc > 40.00) {
            result.innerHTML += ' ~ Obeso: Tipo III';
        }
    }
}