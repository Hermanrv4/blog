<?php
$dir = 'ruta/a/la/carpeta'; // Cambiar por la ruta a la carpeta que quieres listar
$files = scandir($dir);
$xml_files = array_filter($files, function($file) {
  return preg_match('/\.xml$/i', $file); // Filtrar solo archivos .xml o .XML
});
foreach ($xml_files as $file) {
  echo "<option value=\"$file\">$file</option>"; // Generar opciones para la lista desplegable
}
?>
