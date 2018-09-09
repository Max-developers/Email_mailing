
<?php

$hed    =  $_POST["hed"];
$email   = $_POST["email"];
$message = $_POST["message"];
  
$pieces = explode(",", $email);
$headers  = "Content-type: text/html; charset=utf-8 \r\n";

foreach($pieces as $mail){
  
  $mail = rtrim($mail); //Убираем пробелы с переди
  if (! filter_var($mail, FILTER_VALIDATE_EMAIL)) { // проверка правильности EMAIL
      echo "<script>alert('Email введён некорректно')</script>"; 
      $error =true; 
      break;       
  } else  mail($mail, $hed, $message,  $headers ); 
   
}
 
if(!$error)echo "<script>alert('Сообщение отправлено!')</script>";

