//capturando por javascript puro
let button1 = document.getElementById("btn1");
button1.innerText = "Nuevo texto";


// capturando por jquery
//$=> simbolo de dolar es el simbolo que representa a jquery

let boton1jquery = $("#btn1");
boton1jquery.text("nuevo texto");

// seleccionar varios elementos con jquery

// $(".btn").css("border-radius","20");


// evento click en jquery

$("#btn2").click(()=>{
$(".btn").addClass("fondo-naranja").addClass("borde10");

})

// dblclick, mouseover, contextmenu, scroll, focus, keyup, keypress

$("#btn3").click(()=>{
    $(".btn").removeClass("borde10");
})
// agregando atributos a elementos HTML
$(".card > .card-body").attr("cantidad", 123);