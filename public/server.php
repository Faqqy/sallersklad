<?php
$_POST = json_decode( file_get_contents("php://input"), true );
echo var_dump($_POST);
$Name = $_POST['Name'];
$Phone = $_POST['Phone'];

if (mail("faqqybob@yandex.ru", "Заявка с сайта", "Имя:".$Name.". Телефон: ".$Phone ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>