let numero = parseInt(prompt("HOLA!!! \nIntroduce los últimos 4 digitos del número de teléfono de la persona que crees que te envió esto 😉😏: "))
console.log(numero, typeof(numero));

while (numero !== 9401 && numero !== 3005) {
    console.log(numero, typeof(numero));
    numero = parseInt(prompt(`ERROR! \nCómo que ${numero}?? 😑 \nSupongamos que fue un error de tipeo. \nInténtalo de nuevo:`))
}


const renderCard = () => {
    const card = document.querySelector("#card")    
    card.innerHTML += `
        <h1 id="nocierto">Nocierto 😂 si acertaste!!!</h1>
        <img id="yes" src="./yes.gif" alt="yes" srcset="">

        <p class="p1">Probablemente estás pensando:</p>
        <p class="p1">Este otra vez anda con sus cosas, no entiende 😒</p>
        <p class="final-line">Y si, probablemente te moleste y me lleve una bateada monumental.</p>
        <img id="reject" src="./rejecti.gif" alt="reject" srcset="">

        <p class="p1">Pero sabes que?</p>
        <p class="final-line">Eso no impide que pueda tener un detalle contigo, y mucho menos dejar pasar esta fecha, asi que:</p>

        <h1>¡¡¡FELIZ DÍA DE LAS FLORES AMARILLAS!!!</h1>
        <img id="sunflora" src="./sunflora.gif" alt="sunflora" srcset="">
        
        <p class="final-line">El año pasado te hice llegar unas virtuales 😁 así que este año no tiene porqué ser igual y ahora te las hago llegar así de todo corazón 💛</p>
        <img id="parati" src="./parati.gif" alt="para ti" srcset="">

        <p class="p1">Aunque es un pequeño detalle y tal vez insignificante, lo hago con la mejor intención y espero que sean de tu agrado.</p>
        <p class="final-line">Ten un muy bonito día! 😘</p>
        <img id="kiss" src="./kiss.gif" alt="kiss" srcset="">

        <p id = "little"><b>PD:</b> Hay una segunda parte de esta tarjeta 😁, si deseas verla me avisas 😉</p>
    
    `
}

const renderSecretCard = () => {
    const secretCard = document.querySelector("#secret-card")    
    card.innerHTML += `
        <h1>Tarjeta secreta 😁🥰</h1>

        <p class="final-line">Ya que llegaste hasta aqui, quiero aprovechar para decirte lo mucho que te amo 🥰❤️🥰❤️🥰❤️ </p>

        <p class="p1">Y hacerte saber lo importante que eres para mí y para mí vida y esto solo es una micronesima muestra de mi amor</p> 
        <p class ="final-line">❤️🥰❤️😘❤️🥰❤️🥰❤️😘</p>

        <p class="final-line">Ojalá no me lo tomes a mal o con otra interpretación, solamente no quería dejar pasar esta ocasión y de verdad créeme que lo hago incondicionalmente y con la mejor de las intenciones 👉👈</p>

        <p class="final-line">Aunque la distancia la tenga en contra, no quiero mostrarme ni que me sientas distante o indiferente 🥺</p> 

        <p class="final-line">Gracias por estar en mi vida y ser así como tú eres, increíble, auténtica y muy especial</p>

        <h1>❤️❤️❤️¡¡¡TE AMO !!!❤️❤️❤️</h1>

        <img id="grogu" src="./grogu.gif" alt="grogu" srcset="">
    `
}

    if (numero === 9401) {
        alert(`ERROR \nNúmero incorrecto 🙁 \nBueno no importa 😕, oprime Aceptar`)
        renderCard()
    }
    else if (numero === 3005){
        alert(`Has descubierto la tarjeta secreta 😲 \nOprime Aceptar para revelar su contenido`)
        renderSecretCard()
    }
