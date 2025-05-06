$(document).ready(function () {
  $("#btn_cantidad").click(function () {
    let nombre = $("#txt_nombre").val();
    let cantidad = nombre.length;
    $("#resultado").text(
      `El nombre ${nombre} tiene ${cantidad} de caracteres `
    );
  });
  $("#btn_promedio").click(function () {
    let nota1 = parseInt($("#txt_nota1").val());
    let nota2 = parseInt($("#txt_nota2").val());
    let nota3 = parseInt($("#txt_nota3").val());
    let promedio = parseInt((nota1 + nota2 + nota3) / 3);
    if (promedio < 70 && promedio >= 0) {
      $("#resultado").text(`El promedio es: ${promedio} Reprobado`);
    } else if (promedio >= 70 && promedio <= 100) {
      $("#resultado").text(`El promedio es: ${promedio} Aprobado`);
    }
  });
});
