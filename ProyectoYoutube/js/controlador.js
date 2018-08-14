var selectorActual="#div-inicioRespuesta";

/*$("").click(function(){
    $(selectorActual).toggle("slow");
    $("").toggle("slow");
    selectorActual = "";
});*/
$(document).ready(function(){ 
    $(".btn-menu").click(function(){
        $("#sect-menu").toggle("slow");
    });
    $("#div-inicio").click(function(){
        $(selectorActual).toggle("slow");
        $("#div-inicioRespuesta").toggle("slow");
        selectorActual = "#div-inicioRespuesta";
    });
    $("#div-tendencias").click(function(){
        $(selectorActual).toggle("slow");
        $("#div-tendenciasRespuesta").toggle("slow");
        selectorActual = "#div-tendenciasRespuesta";
    });
    $("#div-hitorial").click(function(){
        $(selectorActual).hide();
        $("#div-historialRespuesta").toggle("slow");
        selectorActual = "#div-historialRespuesta";    
    });
    $(".div-musica").click(function(){
        $(selectorActual).hide();
        $("#item-musica").toggle("slow");
        selectorActual = "#item-musica";
    });
    $(".div-deportes").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-deportes").toggle("slow");
        selectorActual = "#item-deportes";
    });
    $(".div-juegos").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-juegos").toggle("slow");
        selectorActual = "#item-juegos";
    });
    $(".div-noticias").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-noticias").toggle("slow");
        selectorActual = "#item-noticias";
    });
    $(".div-enDirecto").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-enDirecto").toggle("slow");
        selectorActual = "#item-enDirecto";
    });
    $(".div-360").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-360").toggle("slow");
        selectorActual = "#item-360";
    });
    $("#irAsubcripcionesPopulares").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-Popupares").toggle("slow");
        selectorActual = "#item-Popupares";
    });
    $("#irAsubcripcionesMusica").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-musica").toggle("slow");
        selectorActual = "#item-musica";
    });
    $("#irASubcripcionesDeportes").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-deportes").toggle("slow");
        selectorActual = "#item-deportes";
    });
    $("#irASubcripcionesJuegos").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-juegos").toggle("slow");
        selectorActual = "#item-juegos";
    });
    $("#irASubcripcionesNoticias").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-noticias").toggle("slow");
        selectorActual = "#item-noticias";
    });
    $("#irASubcripcionesDirecto").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-enDirecto").toggle("slow");
        selectorActual = "#item-enDirecto";
    });
    $("#irAsubcripcionesRealidad").click(function(){
        $(selectorActual).toggle("slow");
        $("#item-360").toggle("slow");
        selectorActual = "#item-360";
    });
    $("#div-explorar").click(function(){
        $(selectorActual).toggle("slow");
        $("#div-explorarCanales").toggle("slow");
        selectorActual = "#div-explorarCanales";
    });
    $("#btnSiguiente").click(function(){
        $("#subcripcionesPopulares").toggle("slow");
        $("#subcripcionesmusica").toggle("slow");
        $("#subcripcionesDeportes").toggle("slow");
        $("#subcripcionesNoticias").toggle("slow");
        $("#subcripcionesDirecto").toggle("slow");
        $("#subcripcionesRealidad").toggle("slow");
    });
    $(".item-configuracionesHistorial").click(function(){
        $(selectorActual).toggle("slow");
        $("#div-historialDeInformes").toggle("slow");
        selectorActual = "#div-historialDeInformes";
    });
    $("#subirVideo").click(function(){
        $(selectorActual).toggle("slow");
        $("#sect-menu").toggle("slow");
        $("#div-subirVideo").toggle("slow");
        selectorActual = "#div-subirVideo";
    });
    //ingresoCorreo();
});
/*----------------------------------Funciones Login-------------------------------
function estadoValidar(color,id){
    $("#"+id).focus(function(){
        $(".barra-input").css("background-color", color);
        $(".barra-input").css("height", "2px");
        $(".textoInput").css("color",color);
        $(".textoInput").css("-webkit-transform", "scale(.75) translateY(-39px)");
        $(".textoInput").css("transform", "scale(.75) translateY(-39px)");
        $(".textoInput").css("font-size", "14px");        
    });
    $("#"+id).blur(function(){
        $(".barra-input").css("background-color", "rgba(0,0,0,0.12)");
        $(".barra-input").css("height", "1px");
        $(".textoInput").css("color", "rgba(0,0,0,0.38)");

        if(($("#"+id).val())== ""){
          $(".textoInput").css("-webkit-transform", "none");
          $(".textoInput").css("transform", "none");
          $(".textoInput").css("font-size", "16px");        
        }        
    });
}
var validarCampoVacio2 = function(id){  
    if ((document.getElementById(id).value) == ""){
      document.getElementById(id).classList.remove('is-valid');
      document.getElementById(id).classList.add('is-invalid');
      var color= "#dc3545";
      estadoValidar(color,id);
      return false;
    }else{
      document.getElementById(id).classList.remove('is-invalid');
      document.getElementById(id).classList.add('is-valid');
      var color= "#4285f4";
      estadoValidar(color,id);
      return true;
    }
};
function ingresoCorreo() {
    $.ajax({
        url: '../ajax/sesion-y-cuenta.php?accion=etapa-correo',
        contentType: "application/json; charset=utf-8",
        success: function (respuesta) {
            console.log(respuesta);
            var contenido = "";

            contenido += '<div class="banner">' +
                '<h1>Acceder</h1>' +
                '<p>Ir a Google Plays</p>' +
                '</div>' +
                '<div  class="div-c3">' +
                '<div class="div-formulario">' +
                '<form method="POST">' +
                '<div class="div-f">' +
                '<div class="div-f1">' +
                '<div class="div-f2">' +
                '<input type="email" name="txt-correo" id="txt-correo" value="" autocomplete="username" spellcheck="false" tabindex="0"  class="form-control div-f3 ">' +
                '<div id="texto-input" class="textoInput" aria-hidden="true" >' +
                'Correo electrónico o teléfono' +
                '</div>  ' +
                '<div class="invalid-feedback" style="position: absolute;">Ingresa un correo electrónico o un número de teléfono</div>' +
                '</div>' +
                '<div class="barra-input" id="barra-input"></div>' +
                '</div>' +
                '</div>' +
                '<div class="password" >' +
                '<content>' +
                '<a id="link-recuperacionC"  href="#div-recuperarCorreo" onclick="recuperarCorreo();" style="margin: 0; ">¿Olvidaste el correo electrónico?</a>' +
                '</content> ' +
                '</div>' +
                '</form> ' +
                '<div style="color: #757575; font-size: 12px; line-height: 1.3333; margin-top: 32px">' +
                '<div style="padding-bottom: 3px; padding-top: 9px;">' +
                '¿Esta no es tu computadora? Usa el modo de invitado para navegar de forma privada.' +
                '<a href="https://support.google.com/chrome/answer/6130773?hl=es-419">' +
                '<content >' +
                '<span >Más información</span>' +
                '</content>' +
                '</a>' +
                '</div>  ' +
                '</div>' +
                '<div class="div-c4">' +
                '<div style="text-align: right;">' +
                '<button id="btn-siguiente-1" class="btn btn-primary" type="button"  onclick="validar2(\'txt-correo\');">' +
                '<content>' +
                '<span >Siguiente</span>' +
                '</content>' +
                '</button>' +
                '</div>' +
                '<div>' +
                '<div>' +
                '<content><a href="#">Crear cuenta</a></content>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            $("#div-pasosLogin").html(contenido);
            estadoValidar("#4285f4", "txt-correo");

            $("#btn-siguiente-1").click(function () {
                if (validarCampoVacio2("txt-correo")) {
                    ingresoContrasena();
                }
            });
            $("#link-recuperacionC").click(function () {

            });
        }

    }).done(function (data, textStatus, jqXHR) {
        if (console && console.log) {
            console.log("La solicitud se ha completado correctamente.");
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {
        if (console && console.log) {
            console.log("La solicitud a fallado: " + textStatus);
        }
    });
}
function ingresoContrasena(){
    $.ajax({
        url:'ajax/sesion-y-cuenta.php?accion=etapa-contrasena',
        success:function(respuesta){
            var contenido="";

            contenido+= '<div class="banner">'+
                        '<h1>Te damos la bienvenida</h1>'+
                        '<div style="display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; min-height: 24px; padding-bottom: 3px; padding-top: 1px; margin-bottom: 0; margin-top: 0;">'+
                        '<div>'+
                        '<svg xmlns="https://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 48 48" fill="#4285f4" aria-hidden="true">'+
                        '<path d="M24,0C10.74,0 0,10.74 0,24C0,37.26 10.74,48 24,48C37.26,48 48,37.26 48,24C48,10.74 37.26,0 24,0ZM24,41.28C17.988,41.28 12.708,38.208 9.6,33.552C9.66,28.788 19.212,26.16 24,26.16C28.788,26.16 38.328,28.788 38.4,33.552C35.292,38.208 30.012,41.28 24,41.28ZM24,7.2C27.972,7.2 31.2,10.428 31.2,14.4C31.2,18.384 27.972,21.6 24,21.6C20.028,21.6 16.8,18.384 16.8,14.4C16.8,10.428 20.028,7.2 24,7.2Z">'+
                        '</path><path d="M0 0h48v48H0z" fill="none"></path></svg>'+
                        '</div>'+
                        '<div id="div-correoRecibido" style="height:20px; width:310px;">'+
                        '</div>'+
                        '<div role="button" id="div-cambiarCorreo" onclick="ingresoCorreo();">'+
                        '<span style="top: -12px">'+
                        '<svg aria-hidden="true" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">'+
                        '<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>'+
                        '<path d="M0-.75h24v24H0z" fill="none"></path></svg>'+
                        '</span>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '<div  class="div-c3">'+
                        '<div class="div-formulario">'+
                        '<form method="POST">'+
                        '<div class="div-f">'+
                        '<div class="div-f1">'+
                        '<div class="div-f2">'+
                        '<input type="password" name="txt-pass" id="txt-pass" value="" autocomplete="username" spellcheck="false" tabindex="0"  class="form-control div-f3 ">'+
                        '<div id="texto-input" class="textoInput" aria-hidden="true" >'+
                        'Ingresa tu contraseña'+
                        '</div>  '+
                        '<div class="invalid-feedback" style="position: absolute;">Ingresa una contraseña</div>'+
                        '</div>'+
                        '<div class="barra-input" id="barra-input"></div>'+
                        '</div>'+
                        '</div>'+
                        '</form> '+                   
                        '<div class="div-c4">'+
                        '<div style="text-align: right;">'+
                        '<button id="btn-siguiente-2" class="btn btn-primary" type="submit"  onclick="validar2(\'txt-pass\');">'+
                        '<content>'+
                        '<span >Siguiente</span>'+
                        '</content>'+
                        '</button>'+
                        '</div>'+
                        '<div class="password">'+
                        '<content>'+
                        '<a id="link-recuperacionPass"  href="#div-central"  style="margin: 0; ">¿Olvidaste la contraseña?</a>'+  
                        '</content> '+
                        '</div>'+ 
                        '</div>'+
                        '</div>'+
                        '</div>';
                        
            $("#div-pasosLogin").html(contenido);  
            estadoValidar("#4285f4","txt-pass");  

            $("#link-recuperacionPass").click(function(){
                
            });
        }  
    });  
  }*/