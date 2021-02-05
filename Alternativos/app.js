var act = document.getElementById("act");

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
    document.getElementById("paginaPrin").style.height = "150%";
    document.getElementById("paginaPrin").style.paddingBottom = "50px";
    document.getElementById("enunciadoUno").style.marginTop = "30px";
    document.getElementById("enunciadoUno").removeAttribute("class","hidden");
    document.getElementById("body").style.height="150%";
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
//-------------------------------------------------------VARIABLES------
const btnAgregarCesta = document.getElementById("btnAgregarCesta");
const btnCalcular1 = document.getElementById("btnCalcular1");
const btnLimpiar1 = document.getElementById("btnLimpiar1");
const vJabon = 1;
const vAtun = 2;
const vRefresco = 0.50;
var montoCompra = 0;
var montoDesc = 0;
var montoPagar = 0;
var unidadesObs = 0;
const descuentoUno = 0.15;
const descuentoDos = 0.10;

//-------------------------------------------------------EVENTOS--------
btnAgregarCesta.addEventListener("click",()=>{
    let cmbArticulos = document.getElementById("articulos");
    let articulo = cmbArticulos.options[cmbArticulos.selectedIndex].value;
    let cant = parseInt(document.getElementById("inCantidad").value);
    if(!isNaN(cant) && articulo!="")
    {
        let docena = Math.trunc(cant / 12);
        
        if(descuento(docena)) //descuento del 15% verdadero
        {
            agregarItemCesta(articulo, cant, obsequio(docena)+ " unidades", descuentoUno);       
            unidadesObs += obsequio(docena);
        }
        else //descuento del 10% por falso
        {
            agregarItemCesta(articulo, cant, obsequio(docena)+ " unidades", descuentoDos);
            unidadesObs += obsequio(docena); 
        }
        
    }
    else{
        alert("No se admiten espacios vacíos, campos obligatorios");
    }
});

btnLimpiar1.addEventListener("click",()=>{
    location.reload();
});


btnCalcular1.addEventListener("click",()=>{
    document.getElementById("mntCompra").innerText = " "+montoCompra+" dólares";
    document.getElementById("mntDescuento").innerText = " "+montoDesc+" dólares";
    document.getElementById("mntPagar").innerText = " "+montoPagar+" dólares";
    document.getElementById("obsequio").innerText = " "+unidadesObs+" unidades";
});
//---------------------------------------------------------FUNCIONES----
function descuento (docena)
{
    return (docena > 3) ? true : false; 
}

function obsequio (docena)
{
    if(docena > 3)
    {
        return docena - 3;
    }
    else
        return 0;
}

function agregarItemCesta(articulo, cantidad, obsequio, descuento)
{
    let precio = (articulo == "jabón") ? vJabon : (articulo == "refresco") ? vRefresco : (articulo == "atún") ? vAtun : "nada";
    let total = precio * cantidad;
    let desc = total * descuento;
    montoCompra += total;
    montoDesc += desc;
    montoPagar += total-desc;
    document.getElementById("datosCesta").innerHTML += 
    `<tr>
        <th scope="row">${articulo}</th>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>${descuento}</td>
        <td>${obsequio}</td>
        <td>${total}</td>
    </tr>`
    ;
}

/* Ejercicio 2 */
//--------------------------------------------------VARIABLES----
const btnCalcular2 = document.getElementById("btnCalcular2");

btnCalcular2.addEventListener("click",()=>{
    let hora = document.getElementById("inHora").value;
    if(hora!="")
    {
        document.getElementById("respEjDos").innerText = horaSegundo(hora);
        console.log(hora+" "+horaSegundo(hora));
    }
    else{
        alert("Campo obligatorio, debe llenarse");
    }
});

function horaSegundo (hora)
{
    let res ="";
    let h = parseInt(hora.substring(-1,2));
    let m = parseInt(hora.substring(3,5));
    let s = parseInt(hora.substring(6,8));
    s++;
    if(s > 59)
    {
        s = 00;
        m++;
        if(m > 59)
        {
            m = 00;
            h++;
            if(h > 23)
            {
                h = 00;
            }
        }
    }
    res = `${h}:${m}:${s}`;
    if(h >= 0 && h <10)
    {
        res = `0${h}:${m}:${s}`;
    }
    if(m>= 0 &&  m <10)
    {
        res = `${h}:0${m}:${s}`;
    }
    if(s>= 0 &&  s <10)
    {
        res = `${h}:${m}:0${s}`;
    }
    if((h >= 0 && h <10) && (m>= 0 &&  m <10) && (s>= 0 &&  s <10))
    {
        res = `0${h}:0${m}:0${s}`;
    }
    else if((m>= 0 &&  m <10) && (s>= 0 &&  s <10))
    {
        res = `${h}:0${m}:0${s}`;
    }
    return res;
}

/* Ejercicio 3 */
/*************************************************************ATRIBUTOS */
const btnCalcular3 = document.getElementById("btnCalcular3");
const iva = 0.20;
btnCalcular3.addEventListener("click", ()=>{
    let km = parseFloat(document.getElementById("inKM").value);
    let pago = 0;
    if(!isNaN(km))
    {
        if(km <= 300)
        {
            pago = 300000+(300000 * iva);
        }
        else if(km > 300 && km <= 1000)
        {
            let kmt = km - 300;
            pago = (300000+(300000 * iva))+(15000*kmt);             
        }
        else if(km > 1000)
        {
            let kmt = km - 300;
            pago = (300000+(300000 * iva))+(10000*kmt); 
        }

        document.getElementById("respEjTres").innerText=pago+" dólares";
    }
    else{
        alert("Campos obligatorios, debe llenarlos");
    }
});





/* EJERCICIO 4 */
const btnCalcular4 = document.getElementById("btnCalcular4");

btnCalcular4.addEventListener("click",()=>{
    let fecha = document.getElementById("inFecha").value;
    if(fecha != "")
    {
        var values = fecha.split("-");
        var diaI = values[2];
        var mesI = values[1];
        var anoI = values[0];
        let dia = new Date();
        let mes = (parseInt(dia.getMonth()+1)<10)?("0"+(parseInt(dia.getMonth()) + 1)):
        (parseInt(dia.getMonth()) + 1);
        let dias = (parseInt(dia.getDate())<10)?("0"+dia.getDate()):(dia.getDate());
        let f = dia.getFullYear()+"-"+ mes+"-"+dias;
        var d = new Date(dia.getFullYear(), mes, dias);
        var fechaIng = new Date(anoI, mesI, diaI);
        if(fechaIng <= d)
        {
            document.getElementById("respEjCuatro").innerText = calcularEdad(fecha);
        }
        else{
            alert(`La fecha debe ser menor a la actual (${f})`);
        }
    }
    else
        alert("No se admiten campos vacíos");
});


function calcularEdad(fecha) {
    if (typeof fecha != "string" && fecha && esNumero(fecha.getTime())) {
        fecha = formatDate(fecha, "yyyy-MM-dd");
    }

    var values = fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];

    // cogemos los valores actuales
    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getYear();
    var ahora_mes = fecha_hoy.getMonth() + 1;
    var ahora_dia = fecha_hoy.getDate();

    // realizamos el calculo
    var edad = (ahora_ano + 1900) - ano;
    if (ahora_mes < mes) {
        edad--;
    }
    if ((mes == ahora_mes) && (ahora_dia < dia)) {
        edad--;
    }
    if (edad > 1900) {
        edad -= 1900;
    }

    // calculamos los meses
    var meses = 0;

    if (ahora_mes > mes && dia > ahora_dia)
        meses = ahora_mes - mes - 1;
    else if (ahora_mes > mes)
        meses = ahora_mes - mes
    if (ahora_mes < mes && dia < ahora_dia)
        meses = 12 - (mes - ahora_mes);
    else if (ahora_mes < mes)
        meses = 12 - (mes - ahora_mes + 1);
    if (ahora_mes == mes && dia > ahora_dia)
        meses = 11;

    // calculamos los dias
    var dias = 0;
    if (ahora_dia > dia)
        dias = ahora_dia - dia;
    if (ahora_dia < dia) {
        ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
        dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
    }

    return edad + " años, " + meses + " meses y " + dias + " días";
}

function esNumero(strNumber) {
    if (strNumber == null) return false;
    if (strNumber == undefined) return false;
    if (typeof strNumber === "number" && !isNaN(strNumber)) return true;
    if (strNumber == "") return false;
    if (strNumber === "") return false;
    var psInt, psFloat;
    psInt = parseInt(strNumber);
    psFloat = parseFloat(strNumber);
    return !isNaN(strNumber) && !isNaN(psFloat);
}




