<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message .= "" . $mail ." se a suscrito a Villa UNTELS" . " \r\n";

$para = 'selek55767@lukaat.com';
$asunto = 'Mensaje de VILLA UNTELS';

mail($para, $asunto, utf8_decode($message), $header);

/* header("Location:about-us.html"); */
?>