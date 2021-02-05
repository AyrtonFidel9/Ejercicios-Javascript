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

const btnEjUno = document.getElementById("btnEjUno");
const btnEjDos = document.getElementById("btnEjDos");
const btnEjTres = document.getElementById("btnEjTres");
const btnEjCuatro = document.getElementById("btnEjCuatro");

btnEjUno.addEventListener("click",()=>{
    document.getElementById("paginaPrin").style.height = "100%";
    document.getElementById("paginaPrin").style.paddingBottom = "50px";
    document.getElementById("enunciadoUno").style.marginTop = "40px";
    document.getElementById("body").style.height="130%"; 
    document.getElementById("enunciadoUno").removeAttribute("class","hidden");
    document.getElementById("enunciadoDos").setAttribute("class","hidden");
    document.getElementById("enunciadoTres").setAttribute("class","hidden");
    document.getElementById("enunciadoCuatro").setAttribute("class","hidden");
});

btnEjDos.addEventListener("click", ()=>{
    document.getElementById("paginaPrin").style.height = "100%";
    document.getElementById("paginaPrin").style.paddingBottom = "10px";
    document.getElementById("enunciadoUno").style.marginTop = "10px";
    document.getElementById("body").style.height="100%";
    document.getElementById("enunciadoUno").setAttribute("class","hidden");
    document.getElementById("enunciadoDos").removeAttribute("class","hidden");
    document.getElementById("enunciadoTres").setAttribute("class","hidden");
    document.getElementById("enunciadoCuatro").setAttribute("class","hidden");
});

btnEjTres.addEventListener("click" ,()=>{
    document.getElementById("paginaPrin").style.height = "100%";
    document.getElementById("paginaPrin").style.paddingBottom = "10px";
    document.getElementById("enunciadoUno").style.marginTop = "10px";
    document.getElementById("body").style.height="100%"; 
    document.getElementById("enunciadoUno").setAttribute("class","hidden");
    document.getElementById("enunciadoDos").setAttribute("class","hidden");
    document.getElementById("enunciadoTres").removeAttribute("class","hidden");
    document.getElementById("enunciadoCuatro").setAttribute("class","hidden");
});

btnEjCuatro.addEventListener("click",()=>{
    document.getElementById("paginaPrin").style.height = "100%";
    document.getElementById("paginaPrin").style.paddingBottom = "10px";
    document.getElementById("enunciadoUno").style.marginTop = "10px";
    document.getElementById("body").style.height="100%";
    document.getElementById("enunciadoUno").setAttribute("class","hidden");
    document.getElementById("enunciadoDos").setAttribute("class","hidden");
    document.getElementById("enunciadoTres").setAttribute("class","hidden");
    document.getElementById("enunciadoCuatro").removeAttribute("class","hidden");
});

/* EJERCICIO 1 */

const btnEmpezarTurno = document.getElementById("btnEmpezarTurno");
const btnTerminarTurno = document.getElementById("btnTerminarTurno");
const btnVender = document.getElementById("btnVender");

var vehiculos;
var dinero;
var gasolina;
const valorGasolina = 1.25;

btnEmpezarTurno.addEventListener('click',()=>{
    let litd = prompt("¿Cuántos litros tiene el tanque en su turno?");
    if(litd != "")
    {
        ld = parseInt(litd);
        document.getElementById("ltDisponibles").innerText = ld+" litros";
        document.getElementById("resVehiculos").innerText = "";
        document.getElementById("resDinero").innerText = "";
        document.getElementById("resGasolina").innerText = "";
        vehiculos = 0;
        dinero = [];
        gasolina = [];
        btnVender.disabled = false;  
    }
    btnEmpezarTurno.disabled = true;
});

btnVender.addEventListener('click',()=>{
    let litros = parseInt(document.getElementById("inLitros").value);
    if(!isNaN(litros) && litros <= ld )
    {
        gasolina.push(litros);
        dinero.push(valorCompra(litros));
        vehiculos++;
        ld -= litros;
        document.getElementById("ltDisponibles").innerText = (ld)+" litros";
        document.getElementById("inLitros").value = "";
        alert("¡¡Venta Exitosa!!");
        if(ld == 0)
        {
            alert("No hay gasolina disponible");
            btnVender.disabled = true;    
        }
    }   
    else
        alert("No se admiten campos vacíos o caracteres, ademas debe ser menor o igual a la cantidad de litros disponibles");
});

btnTerminarTurno.addEventListener('click',()=>{
    document.getElementById("resVehiculos").innerText = vehiculos;
    document.getElementById("resDinero").innerText = "$"+sumarDinero(dinero);
    document.getElementById("resGasolina").innerText = numeroMayor(gasolina)+" litros";
    btnEmpezarTurno.disabled = false;
    ld = 0;
    btnVender.disabled = true;
});


function valorCompra (litros)
{
    return litros * valorGasolina;
}

function numeroMayor(vector)
{
    return Math.max.apply(null, vector);
}

function sumarDinero(vector)
{
    let suma = 0;
    for(let i = 0; i < vector.length; i++)
        suma += vector[i];
    return suma;
}

/* Ejercicio 2 */

const btnCalcular2 = document.getElementById("btnCalcular2");

btnCalcular2.addEventListener('click', calcular);

function calcular() {   
    let decimal = parseInt(document.getElementById("inDecimal").value);
    let binario = '';
    if (decimal <= 0) {
        document.getElementById("resp").innerHTML = 'Binario: 0';
    }else
    {
        while (decimal > 0) 
        {
            switch(decimal%2)
            {
                case 0:
                    binario = '0'+binario;
                    break;
                case 1:
                    binario = '1'+binario;
                    break;
            }
            decimal = Math.floor(decimal/2);
        }
        document.getElementById("resBinario").innerText = binario;
    }
}



/******EJERCICIO 3  ********/
    
const btnCalcular3= document.getElementById("btnCalcular3");

btnCalcular3.addEventListener("click",()=>{
    document.getElementById("rspNarcisista").innerText = "";
    let cantidad = parseInt(document.getElementById("inCantidad").value);
    if(!isNaN(cantidad) && cantidad <= 25 && cantidad >= 1)
    {
        let j = 0;
        let numero = 0; 
        while(j < cantidad) 
        {
            if(esNarcisista(numero))
            {
                document.getElementById("rspNarcisista").innerText += numero+",";
                j++;
            }
            numero++;
        }
    }
    else
        alert("No se admiten campos vacíos o numeros superiores a 25 e inferiores a 1");
});

const esNarcisista = numero =>{
    const numeroComoCadena = numero.toString();
    const longitudNumero = numeroComoCadena.length;
    let suma = 0;
    for(let i = 0; i < longitudNumero; i++)
    {
        let cifraComoEntero = parseInt(numeroComoCadena[i]);
        let numeroElevado = cifraComoEntero ** longitudNumero;
        suma += numeroElevado;
    }
    return (suma === numero) ? true : false;
}

/*EJERCICIO 4**/

const btnCalcular4 = document.getElementById("btnCalcular4");

var list = [1, 2, 3, 4];
var listaux = [1, 2, 3, 4];

btnCalcular4.addEventListener('click',mostrar);

function hallar() {
    let listf = new Array();
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < listaux.length; j++) {
            if (list[i] != listaux[j]) {
                listf.push(list[i] + "" + listaux[j]);
            }
        }
    }
    return listf;
}

function mostrar() {
    document.getElementById("inResultado").value = hallar();
} 