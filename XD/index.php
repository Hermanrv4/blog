<form method="post" action="simplexml_load_file.php">
    <?php
        // Obtiene el directorio actual
        $dir = "./xml/";
    
        // Abre el directorio
        $dh = opendir($dir);
    
        // Lee los archivos del directorio y los almacena en un arreglo
        $files = array();
        while (($file = readdir($dh)) !== false) {
            if ($file != "." && $file != ".." && pathinfo($file, PATHINFO_EXTENSION) == "xml") {
                $files[] = $file;
            }
        }
    
        // Cierra el directorio
        closedir($dh);
    
        // Ordena los archivos alfabéticamente
        sort($files);
    ?>
    
    <!-- Muestra los archivos en una lista HTML con imágenes del logo de XML y entrada de radio -->
    <ul class="mosaic">
        <?php foreach ($files as $file) { ?>
            <li>
                <input type="radio" id="<?php echo $file ?>" name="archivo" value="<?php echo $file ?>" />
                <label for="<?php echo $file ?>">
                    <img src="./img/xml-logo.png" alt="XML logo">
                    <span><?php echo $file ?></span>
                </label>
            </li>
        <?php } ?>
    </ul>
    
    <button type="submit">Continuar</button>
</form>





<style>
    .mosaic {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .mosaic li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        height: 200px;
        margin: 10px;
        border: 1px solid #ccc;
        box-shadow: 0px 0px 5px #ccc;
    }
    .mosaic label {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #333;
        cursor: pointer;
    }
    .mosaic img {
        width: 100px;
        height: 100px;
        margin: 20px 0;
    }
    .mosaic span {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
    }
</style>
