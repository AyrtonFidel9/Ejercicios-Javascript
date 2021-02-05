const btnEjUno = document.getElementById("btnEjUno");
const btnEjDos = document.getElementById("btnEjDos");
act.addEventListener("change",()=>{
    if(act.checked == true)
    {
        document.getElementById("menu").style.width = '20%';
        document.querySelector("#ops").removeAttribute("class","hidden");
    }
    else
    {
        document.getElementById("menu").style.width = '6%';
        document.querySelector("#ops").setAttribute("class","hidden");
    }
});

btnEjUno.addEventListener("click",()=>{
    document.getElementById("enunciadoUno").removeAttribute("class","hidden");
    document.getElementById("enunciadoDos").setAttribute("class","hidden");
});

btnEjDos.addEventListener("click", ()=>{
    document.getElementById("enunciadoUno").setAttribute("class","hidden");
    document.getElementById("enunciadoDos").removeAttribute("class","hidden");
});

const btnIniciar = document.getElementById("btnIniciar");
const btnParar = document.getElementById("btnParar");
const texto = document.getElementById("texto");

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

btnIniciar.addEventListener('click',()=>{
    recognition.start();
});

btnParar.addEventListener('click',()=>{
    recognition.stop();
});

recognition.onresult = (evt) =>{
    const results = evt.results;
    const frase = results[results.length-1][0].transcript;
    texto.value += frase;

}


/*Ejercicio 2*/

const btnAgregarPersona = document.getElementById("btnAgregarPersona");
const btnSortear = document.getElementById("btnSortear");
const btnNuevo = document.getElementById("btnNuevoSorteo");

var participantes = [];

btnAgregarPersona.addEventListener('click',()=>{
    let persona = prompt("Ingrese un nombre");
    if(persona != "")
    {
        participantes.push(persona);
    }
});

btnSortear.addEventListener('click',()=>{
    let premio = document.getElementById("inPremio").value;
    let parti = participantes.length;
    if(premio != "" && parti != 0)
    {
        let ganador = Math.floor(Math.random() * parti);
        document.getElementById("ganador").innerText = participantes[ganador];
    }
    else {
        alert("Debe ingresar almenos un participante y un premio");
    }
});

btnNuevo.addEventListener('click',()=>{
    participantes = [];
    document.getElementById("ganador").innerText = "";
    let premio = document.getElementById("inPremio").value = "";
});





