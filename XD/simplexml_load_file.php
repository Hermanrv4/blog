<?php
    // Obtener el nombre del archivo XML seleccionado
    $archivo = $_POST['archivo'];

    // Leer el archivo XML seleccionado
    $xml = simplexml_load_file('./xml/' . $archivo);

    // Mostrar los datos en una tabla HTML
    echo '<table>';
    echo '<tbody>';

    // Datos de la factura
    echo '<tr><td colspan="2"><h3>Factura</h3></td></tr>';
    echo '<tr><td>Pedido:</td><td>' . $xml->cabecera->pedido . '</td></tr>';
    echo '<tr><td>Fecha de facturación:</td><td>' . $xml->cabecera->fecha . '</td></tr>';
    echo '<tr><td>Referencia:</td><td>' . $xml->cabecera->referencia . '</td></tr>';
    echo '<tr><td>F. contabilización:</td><td>' . $xml->cabecera->contabilizacion . '</td></tr>';

    // Detalles de la factura
    echo '<tr><td colspan="2"><h3>Detalles de la factura</h3></td></tr>';
    foreach ($xml->detalle as $detalle) {
        echo '<tr>';
        echo '<td>Producto:</td><td>' . $detalle->producto . '</td>';
        echo '</tr>';
        echo '<tr>';
        echo '<td>Cantidad:</td><td>' . $detalle->cantidad . '</td>';
        echo '</tr>';
        echo '<tr>';
        echo '<td>Precio:</td><td>' . $detalle->precio . '</td>';
        echo '</tr>';
    }

    // Totales de la factura
    echo '<tr><td colspan="2"><h3>Totales de la factura</h3></td></tr>';
    echo '<tr><td>Importe:</td><td>' . $xml->totales->importe . '</td></tr>';
    echo '<tr><td>Valor de venta:</td><td>' . $xml->totales->valor_venta . '</td></tr>';
    echo '<tr><td>IGV:</td><td>' . $xml->totales->igv . '</td></tr>';
    echo '<tr><td>Texto:</td><td>' . $xml->totales->texto . '</td></tr>';
    echo '<tr><td>Retención:</td><td>' . $xml->totales->retencion . '</td></tr>';
    echo '<tr><td>Importe Final:</td><td>' . $xml->totales->importe_final . '</td></tr>';

    echo '</tbody>';
    echo '</table>';
?>

