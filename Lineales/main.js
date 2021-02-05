/****************************ENUNCIADO 1******************************/
const btnLimpliar1 = document.getElementById("btnLimpiar1");
const btnCalcular1 = document.getElementById("btnCalcular1");
var lat;
const pendiente = 90;
var dia = new Date();
btnCalcular1.addEventListener("click",()=>{
    let altPoste = parseFloat(document.getElementById("altPoste").value);
    let altSombra = parseFloat(document.getElementById("altSombra").value);
    let respuesta;
    if(!isNaN(altPoste) && !isNaN(altSombra))
    {
        respuesta = Math.atan(altPoste/altSombra);
        var c = new Coordenada();
        lat = Math.grados(respuesta).toFixed(3);
        let resFin = c.dec2gms(Math.grados(respuesta).toFixed(3), Coordenada.LATITUD);
        document.getElementById("respuesta1").innerText = resFin.valor;
        let ang = Math.grados(anguloIncidencia());
        document.getElementById("resAngulo").innerText = ang.toFixed(3) + " grados";
    }
    else
    {
        alert("No se admiten espacios vacíos");
    }
});

function Coordenada()
{
	var LATITUD   = 1;
	var LONGITUD  = 2;
	var NORTE     = 'n';
	var SUR       = 's';
	var ORIENTE   = 'e';
	var OCCIDENTE = 'w';
	
	/**
	 * Convierte una coordenada en formato decimal a su correspondiente
	 * versión en formato grados-minutos-segundos.
	 *
	 * @param	Float	Valor real de la coordenada.
	 * @param	Int		Tipo de la coordenada {Coordenada.LATITUD, Coordenada.LONGITUD}.
	 * @return	Array	['grados', 'minutos', 'segundos', 'direccion', 'valor'].
	 */
	
	this.dec2gms = function(valor, tipo)
	{
		grados    = Math.abs(parseInt(valor));
		minutos   = (Math.abs(valor) - grados) * 60;
		segundos  = minutos;
		minutos   = Math.abs(parseInt(minutos));
		segundos  = Math.round((segundos - minutos) * 60 * 1000000) / 1000000;
		signo     = (valor < 0) ? -1 : 1;
		direccion = (tipo == Coordenada.LATITUD) ? 
		            ((signo > 0) ? 'N' : 'S') : 
		            ((signo > 0) ? 'E' : 'W');
		
		if(isNaN(direccion))
			grados = grados * signo;
		
		return {
			'grados'   : grados,
			'minutos'  : minutos,
			'segundos' : segundos,
			'direccion': direccion,
			'valor'    : grados + "\u00b0 " + minutos + "' "+ segundos + 
			            "\"" + ((isNaN(direccion)) ? (' ' + direccion) : '')
		};
	};
}


Math.grados = function(radianes) {
    return radianes * 180 / Math.PI;
};

Math.radianes = function(grados) {
    return grados * Math.PI / 180;
};

function anguloHora(hora)
{
    return 15*(hora-12);
}

function declinacionSolar(dias)
{
    return Math.sin(23.45)*(360*((284-dias)/365));
}

function diaAnio(d, mes)
{
    for(let i = 0; i < 12; i++)
    {
        return (i == 0) ? d :
                (i == 1) ? (d+31) :
                (i == 2) ? (d+29) :
                (i == 3) ? (d+31) :
                (i == 4) ? (d+30) :
                (i == 5) ? (d+31) :
                (i == 6) ? (d+30) :
                (i == 7) ? (d+31) :
                (i == 8) ? (d+30) :
                (i == 9) ? (d+31) :
                (i == 10) ? (d+30) :
                (d+31);
    }
}

function anguloIncidencia()
{
    let cmbHora = document.getElementById("cmbHora");
    let opHora = cmbHora.options[cmbHora.selectedIndex].value;
    let d = declinacionSolar(diaAnio(dia.getDate(),dia.getMonth()));
    let h = anguloHora(parseInt(opHora));
    return Math.acos(
        (
            Math.sin(lat-pendiente)*Math.sin(d)
        )
        +
        (
            Math.cos(lat-pendiente)*Math.cos(d)*Math.cos(h)
        ));
}

btnLimpliar1.addEventListener("click",()=>{
    document.getElementById("altPoste").value="";
    document.getElementById("altSombra").value="";
});


/********************************************************************/
const btnEjDos = document.getElementById("btnEjDos");
const btnEjUno = document.getElementById("btnEjUno");
const btnEjTres = document.getElementById("btnEjTres");

btnEjDos.addEventListener("click",()=>{
    document.getElementById("enunciadoUno").setAttribute("class","hidden");
    document.getElementById("enunciadoDos").removeAttribute("class","hidden");
    document.getElementById("enunciadoTres").setAttribute("class","hidden");

});

btnEjUno.addEventListener("click",()=>{
    document.getElementById("enunciadoUno").removeAttribute("class","hidden");
    document.getElementById("enunciadoDos").setAttribute("class","hidden");
    document.getElementById("enunciadoTres").setAttribute("class","hidden");
});

btnEjTres.addEventListener("click",()=>{
    document.getElementById("enunciadoUno").setAttribute("class","hidden");
    document.getElementById("enunciadoDos").setAttribute("class","hidden");
    document.getElementById("enunciadoTres").removeAttribute("class","hidden");
});

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

/*********************EJERCICIO 2***************************/
const btnLimpliar2 = document.getElementById("btnLimpiar2");
const btnCalcular2 = document.getElementById("btnCalcular2");
const gravedad = 9.8;

btnCalcular2.addEventListener("click",()=>{
    let tiempo = parseFloat(document.getElementById("txtTiempo").value);
    let alt = altura (tiempo);
    document.getElementById("respuestaAlt").innerText = alt.toFixed(2) + " metros";
});

btnLimpliar2.addEventListener("click",()=>{
    document.getElementById("txtTiempo").value = "";
});

function velocidadFinal(t)
{
    return gravedad*t;
}

function altura (t)
{
    return (1/2)*gravedad*Math.pow(t,2);
}
/***********************************************************/

/****************************EJERCICIO 3*******************************/
const btnLimpliar3 = document.getElementById("btnLimpiar3");
const btnCalcular3 = document.getElementById("btnCalcular3");

btnCalcular3.addEventListener("click",()=>{
    let num1 = document.getElementById("txtNum1").value;
    let num2 = document.getElementById("txtNum2").value;
    let num3 = document.getElementById("txtNum3").value;
    let num4 = document.getElementById("txtNum4").value;
    let num5 = document.getElementById("txtNum5").value;
    if(!isNaN(num1)&&!isNaN(num2)&&!isNaN(num3)&&!isNaN(num4)&&!isNaN(num5)&&
        num1.length == 5 && num2.length == 5 && num3.length == 5 && num4.length == 5 &&
        num5.length == 5)
    {
        let resp = numero(num1,0)+numero(num2,1)+numero(num3,2)+numero(num4,3)+numero(num5,4);
        document.getElementById("respNum").innerText = resp;

    }
    else{
        alert("Debe ingresar un número de 5 cifras y no se admiten espacios vacíos");
    }
    
});

function numero (num, pos)
{
    return num[pos];
}

btnLimpliar3.addEventListener('click',()=>{
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
    document.getElementById("txtNum3").value = "";
    document.getElementById("txtNum4").value = "";
    document.getElementById("txtNum5").value = "";
});

/**********************************************************************/