$(document).ready(function(){
    /* OCULTAR PARRAFOS */
    $("#btn_ocultar_parrafos").click(function(){
        $("p").hide();
    });
    /* MOSTRAR PARRAFOS */
    $("#btn_mostrar_parrafos").click(function(){
        $("p").show();
    });
    /* OCULTAR PARRAFOS DESPACIO */
    $("#btn_ocultar_despacio").click(function(){
        $("p").hide("slow");
    });
    /* MOSTRAR PARRAFOS DESPACIO */
    $("#btn_mostrar_despacio").click(function(){
        $("p").show("fast");
    });
    $("#btn_ocultar_slide").click(function(){
        $("p").slideUp(2000);
    });
    $("#btn_mostrar_slide").click(function(){
        $("p").slideDown(2000);
    });
    
});