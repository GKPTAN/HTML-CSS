<?php
function validarInput($name) {
    if (!is_string($name)) {
        return "O valor do campo tem que ser do tipo string";
    }
}


    $name = $_POST['names'];
    $validação = validarInput($name);
    if ($validação === true) {
        echo "Input válido";
    } else {
        echo "Erro: ", $validação;
    }
?>