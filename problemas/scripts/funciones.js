function metro(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const resultado = num1 * num2;
    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function energia(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const resultado = num1 * num2;
    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function precio(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const des = num1 * 0.20;
    const resultado = (num1 - des) * 1.15;

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function ahorro(){
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const des = sueldo * 0.15;
    const resultado = des * 48;

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function cheque(){
    const dias = parseFloat(document.getElementById("dias").value);
    const hotel = parseFloat(document.getElementById("hotel").value);
    const comida = parseFloat(document.getElementById("comida").value);
    const a = hotel * dias;
    const b = comida * dias;
    const c = 100 * dias;
    const resultado = a + b + c;

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function potencia(){
    const corriente = parseFloat(document.getElementById("corriente").value);
    const resistencia = parseFloat(document.getElementById("resistencia").value);
    const v = resistencia * corriente;
    const resultado = v * corriente;

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function area(){
    const lado = parseFloat(document.getElementById("lado").value);
    const resultado = lado * lado;

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function final(){
    const c1 = parseFloat(document.getElementById("c1").value);
    const c2 = parseFloat(document.getElementById("c2").value);
    const c3 = parseFloat(document.getElementById("c3").value);
    const resultado = ((c1 * 0.25) + (c2 * 0.25) + (c3 * 0.5));

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function vida(){
    const edad = parseFloat(document.getElementById("edad").value);
    const dias = edad * 365;
    const meses = edad * 12;
    const semanas = edad * 52;
    const horas = edad * 24;

    document.getElementById("resul").innerText = "Dias: " + dias + "\nMeses: " + meses + "\nSemanas: " + semanas + "\nHoras: " + horas;

    mostrarResultado();
}
function total(){
    const costo = parseFloat(document.getElementById("costo").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);
    const resultado = costo * tiempo;

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function hotel(){
    const costo = parseFloat(document.getElementById("costo").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);
    const resultado = costo * tiempo;

    document.getElementById("resul").innerText = "El resultado es: " + resultado;

    mostrarResultado();
}
function mostrarResultado() {
    const resultadoContenedor = document.querySelector(".resultado");
    resultadoContenedor.classList.add("mostrar");
}
