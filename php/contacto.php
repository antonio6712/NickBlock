<?php
//Destinatario
$destinatario = 'antonio.flores67@hotmail.com';

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$affair = $_POST['affair'];
$message = $_POST['message'];

$header = 'NickBlock';
$fullMesage = $message . "\nAtentamente" . $fullname . "\nTelefono" . $phone . "\nCorreo" . $email ;

mail($destinatario, $affair, $fullMesage, $header );
echo "<script> alert('correo enviado exitosamente')</script>"
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>"


?>