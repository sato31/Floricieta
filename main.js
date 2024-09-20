let numero = parseInt(prompt("HOLA!!! \nIntroduce los últimos 4 digitos del número de teléfono de la persona que crees que te envió esto 😉😏: "))
console.log(numero, typeof(numero));

while (numero !== 9401 && numero !== 3005) {
    console.log(numero, typeof(numero));
    numero = parseInt(prompt(`ERROR 😑 ${numero} \nSupongamos que fue un error de tipeo. \nIntentalo de nuevo`))
}



if (numero === 9401) {
    alert("9401")
}
else if (numero = 3005){
    alert("3005")
}