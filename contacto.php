<?php

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$header = 'From: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain \r\n";

$message = "Este mensaje fue enviado por: " . $fullname . "\r\n";
$message .= "Su e-mail es: " . $email . "\r\n";
$message .= "Telefono de contacto: " . $phone . "\r\n";
$message .= "Mensaje: " . $_POST['message'] . "\r\n";
$message .= "Enviando el: " . date('d/m/Y', time());

$para = 'antonio.sringan@gmail.com';
$asunto = $_POST['affair'];

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");


?>