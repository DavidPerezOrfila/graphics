$(document).ready(function() {
  
  
  // Función que repasa todas las celdas y maqueta aquellas cuyo texto es cancelado, cerrado o iniciado
  $(".estado").each(function() {
    $(this).each(function() {
      switch ($(this).html()) {
        case "DEADLINE ALERT":
          $(this).css("background-color", "#fa7d82");
          $(this).html("Alerta SLA");
          break;
        case "alert stage 2":
          $(this).css("background-color", "#F5F3EA");
          $(this).html("Abierto");
          break;
        case "alert stage 3":
          $(this).css("background-color", "#F5F3EA");
          $(this).html("Abierto");
          break;
        case "closed":
          $(this).css("background-color", "#66bd84");
          $(this).html("Cerrado");
          break;
        case "open":
          $(this).css("background-color", "#F5F3EA");
          $(this).html("Abierto");
          break;
      }
    });
  });

  //Función que comprueba la columna código cierre y en base al resultado que recibe, lo maqueta
  $(".cierre").each(function() {
    $(this).each(function() {
      switch ($(this).html()) {
        case "1":
          if ($(this).prev().text() != "") {
            $(this).css("background-color", "#66bd84");
            $(this).html("Exitoso");
            break;
          } else {
            $(this).css("background-color", "#F5F3EA");
            $(this).html("");
            break;
          }
        default:
          $(this).css("background-color", "#fa7d82");
          $(this).html("Cancelado");
          break;
      }
    });
  });

  //Oculta las columnas Categoría, Cambio Modelo y CI
  $(".categoria, .cambioModelo, .ci").each(function() {
    $(this).each(function() {
      $(this).hide();
    });
  });

  //Oculta la columna subcategoria y comprueba si el cambio es de entorno corporativo o industrial, maquetando las celdas anteriores y siguientes
  $(".subcategoria").each(function() {
    $(this).each(function() {
      $(this).hide();
      switch ($(this).html()) {
        case "Cambios entornos industriales":
          $(this).css("background-color", "#fdc966");
          $(this).next().css("background-color", "#fdc966");
          $(this).next().next().css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this)
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .css("background-color", "#fdc966");
          $(this).prev().css("background-color", "#fdc966");
          $(this).prev().prev().css("background-color", "#fdc966");
          $(this).prev().prev().prev().css("background-color", "#fdc966");
          break;
        default:
          $(this).css("background-color", "#F5F3EA");
          break;
      }
    });
  });

  /*Oculta la columna riesgo, comprueba si el riesgo es alto y lo maqueta de un color diferente, en caso de ser un cambio cancelado pone en negrita todas
  las celdas de esa fila*/
  $(".riesgo").each(function() {
    $(this).each(function() {
      $(this).hide();
      switch ($(this).html()) {
        case "0":
          $(this).css("background-color", "#F5F3EA");
          $(this).html("Sin Riesgo");
          break;
        case "1":
          $(this).css("background-color", "#F5F3EA");
          $(this).html("Bajo");
          break;
        case "2":
          $(this).css("background-color", "#F5F3EA");
          $(this).html("Algún Riesgo");
          break;
        case "3":
          $(this).css("background-color", "#F5F3EA");
          $(this).html("Moderado");
          break;
        case "4":
          $(this).css("background-color", "#fa7d82");
          $(this).html("Alto");
          $(this).prev().css("font-weight", "Bold");
          $(this).prev().prev().css("font-weight", "Bold");
          $(this).prev().prev().prev().css("font-weight", "Bold");
          $(this).prev().prev().prev().prev().css("font-weight", "Bold");
          $(this).prev().prev().prev().prev().prev().css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          $(this)
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .css("font-weight", "Bold");
          break;
      }
    });
  });
});
