$(document).ready(function() {
    // Ruta a la carpeta que contiene los archivos XML
    var dir = "./xml/";
    
    // Hace una solicitud AJAX al servidor para obtener los archivos XML
    $.get(dir, function(data) {
      // Encuentra los archivos XML en la respuesta del servidor
      var xml_files = $(data).find("a:contains('.xml')");
      
      // Agrega los archivos a la lista en el HTML
      xml_files.each(function() {
        var filename = $(this).attr("href");
        $("#file-list").append("<li>" + filename + "</li>");
      });
    });
  });
  