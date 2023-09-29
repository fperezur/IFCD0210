const sal = document.getElementById("salida");
// const sal = document.querySelector("#salida");

function cuenta() {
    entrada = texto.value;
    // document.write("Entrada: " + entrada + "<br>");
    sal.innerHTML = "Entrada: ";
    sal.innerHTML += "<span id='in'>" + mayusculas(entrada) + "</span>";
    sal.innerHTML += "<br>";

    vocales = entrada.match(/[aeiouáéíóúü]/gi);
    if (vocales != null) {   // encuentro alguna vocal
        numv = vocales.length;
    } else {   // no encuentro ninguna vocal
        numv = 0;
    }
    // metodo alternativo con operador ternario
    // numv = (vocales != null) ? vocales.length : 0;
    // document.write("Numero de vocales: " + numv + "<br>");
    sal.innerHTML += "Numero de vocales: " + numv + "<br>";

    consonantes = entrada.match(/[^aeiouáéíóúü¿?¡!()\[\] ]/gi);
    numc = (consonantes == null) ? 0 : consonantes.length;
    // document.write("Numero de consonantes: " + numc);
    sal.innerHTML += "Numero de consonantes: " + numc;

    pintar();
    pintar2();
}

function mayusculas(x) {
    return x.toUpperCase();
}

function pintar() {
    // background-color: yellow;
    sal.style.backgroundColor = "yellow";
    // font-size: 30px;
    sal.style.fontSize = "30px";
    // text-align: right;
    sal.style.textAlign = "right";
    // border: 10px dashed red;
    sal.style.border = "10px dashed red";
}

function pintar2() {
    const i = document.getElementById("in");
    i.style.color = "green";
    i.style.border = "1px solid blue";
    i.style.backgroundColor = "cyan";
}
