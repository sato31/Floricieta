let numero = parseInt(prompt("HOLA!!! \nIntroduce los últimos 4 digitos del número de teléfono de la persona que crees que te envió esto 😉😏: "))
console.log(numero, typeof(numero));

while (numero !== 9401 && numero !== 3005) {
    console.log(numero, typeof(numero));
    numero = parseInt(prompt(`ERROR 😑 ${numero} \nSupongamos que fue un error de tipeo. \nIntentalo de nuevo`))
}


const renderCard = () => {
    const card = document.querySelector("#card")    
    card.innerHTML += `
    <h1>Nocierto 😂</h1>
    <h1>Acertaste!!!</h1>

    
    `
}

const renderSecretCard = () => {
    const secretCard = document.querySelector("#secret-card")    
    card.innerHTML += `
    <h1>Tarjeta Secreta</h1>
    `
}

    if (numero === 9401) {
        alert(`ERROR \nNúmero incorrecto 🙁 \n Bueno no importa 😕, aprieta Aceptar`)
        renderCard()
    }
    else if (numero === 3005){
        alert("3005")
        renderSecretCard()
    }

// const renderCards = () => {
//     const card = document.querySelector("#card")
//     const secretCard = document.querySelector("#secret-card")
//     card.innerHTML = "";
//     if (numero === 9401) {
//         alert(`ERROR \nNúmero incorrecto 🙁 \n Bueno no importa 😕, aprieta Aceptar`)
//         card.innerHTML += `
//             <h1>Nocierto 😂</h1>
//             <h1>Acertaste!!!</h1>
//             `
//     }
//     else if (numero === 3005){
//         alert("3005")
//         secretCard.innerHTML += `
//             <h1>Tarjeta Secreta</h1>
//             `
//     }

// }
