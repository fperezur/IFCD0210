// muestra de diferentes modos m un texto t
function escribir(m, t = "") {
    switch (m) {
        case "a": alert(t); break;
        case "c": console.log(t); break;
        case "l": document.write(t+"<br>"); break;
        case "w": document.write(t); break;
        case "-": document.write("<hr>"); break;
        case "d": {
            const span = document.createElement("span");
            span.setAttribute("id", "salida");
            document.body.appendChild(span);
            span.innerHTML = t;
            break;
        }
    }
}
