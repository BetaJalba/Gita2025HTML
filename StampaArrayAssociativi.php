<!DOCTYPE html>
<?php
$method = $_SERVER["REQUEST_METHOD"];

if($method == "POST"){
    writeMap($_POST);
}
elseif ($method == "GET"){
    writeMap($_GET);
}
else
    echo "<p>Manda una richiesta consona. (GET o POST)</p>";

function writeMap($_MAP){
    foreach($_MAP as $k => $v){
        echo "<p>" . strtoupper(htmlspecialchars($k)) . ": " . (is_array($v) ? print_r($v, true) : htmlspecialchars($v)) . "</p>";
    };
};
?>