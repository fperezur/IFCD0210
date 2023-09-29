class Fecha extends Date {
    constructor() {
        super()
    }
    // muestra el dia de la semana en español
    getDia() {
        const dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        return dia[this.getDay()];
    }
    // muestra el mes en español
    getMes() {
        const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return mes[this.getMonth()];
    }
    // muestra Hoy es dia, dd de mes de aaaa
    getHoy() {
        return `Hoy es ${this.getDia()}, ${this.getDate()} de ${this.getMes()} de ${this.getFullYear()}`;
    }
}
