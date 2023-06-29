<?php
header("Content-Type: application/json");
require_once "Mail.php";

if($_SERVER["REQUEST_METHOD"]==="GET" && isset($_GET)){
    $subject=$_GET["subject"];
    $body=$_GET["body"];
    $senderMail=$_GET["topic"];

    Mail::send($subject,$body,$senderMail);

    echo json_encode(["done" => $_GET]) ;
}
else{
    echo json_encode(["fail" => $_GET]) ;
}






