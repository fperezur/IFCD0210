const campofecha = document.getElementById("fecha");   // campofecha, campo del formulario
const sal = document.getElementById("salida");
let texto = "";

function fecha() {
    if (campofecha != null) {
        valfec = campofecha.value;      // valfec, cadena de la fecha del formulario
        const fec = new Date(valfec);   // fec, fecha del formulario

        aaaa = fec.getFullYear();       // aaaa, año seleccionado
        mm = fec.getMonth();            // mm, mes seleccionado
        dd = fec.getDate();             // dd, dia seleccionado

        texto = "<h1>" + meses(mm) + " - " + aaaa + "</h1>";
        tabla();
        calendario();
    }
}

function tabla() {
    texto += "<table>";

    // cabecera con dias de la semana
    texto += "<tr>";
    for (h = 0; h < 7; h++) {
        texto += (h == 0) ? "<th class='dom'>" : "<th>";
        texto += diasem(h) + "</th>";
    }
    texto += "</tr>";

    // tabla con dias (6 semanas * 7 dias)
    for (s = 0; s < 6; s++) {
        texto += "<tr>";
        for (d = 0; d < 7; d++) {
            texto += (d == 0) ? "<td class='dom'>" : "<td>";
            texto += "</td>";
        }
        texto += "</tr>";
    }
    texto += "</table>";
    sal.innerHTML = texto;
}

function calendario() {
    let ultdia = new Date(aaaa, mm + 1, 0).getDate();   // ultdia, ultimo dia del mes
    let sem = new Date(aaaa, mm, 1).getDay();           // sem, dia de la semana del primer dia del mes
    const td = document.querySelectorAll("td");         // td, cada una de las casillas de la tabla

    // relleno la tabla anterior con los dias del mes
    for (d = 0; d < ultdia; d++) {
        td[d+sem].innerHTML = d + 1;
    }

    // recorro la tabla quitando las casillas vacias
    for (j in td) {
        if (td[j].innerHTML == "") {
            td[j].style.borderWidth = "0";
        }
    }
}

// meses() muestra el mes en forma de texto
function meses(pm) {
    const m = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return m[pm];
}

// diasem() muestra el dia de la semana en forma de texto
function diasem(pd) {
    const s = ["D", "L", "M", "X", "J", "V", "S"];
    return s[pd];
}
