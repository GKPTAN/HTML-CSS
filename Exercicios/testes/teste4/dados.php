<?php

function validarInput($name, $age, $gender, $email, $senha, $passwordConfirm) {

    $validGenders = ["Masculino", "Feminino"];
    $regex = '/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/';

    if (!is_string($name)) {
        return "ERROR_STRING_VALUE: O valor do campo 'nome' tem que ser do tipo string";
    }

    if (!filter_var($age, FILTER_VALIDATE_INT)) {
        die("ERROR_VALIDATE_INT: o valor do campo deve ser um número inteiro!");
    }

    if (!is_string($gender) || !in_array($gender, $validGenders, true)) {
        return "ERROR_VALIDATE_GENDER";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match($regex, $email)) {
        return "ERROR_EMAIL_FORMAT: formato de e-mail inválido!";
    }

    if (empty($name) || empty($age) || empty($gender) || empty($email) || empty($senha) || empty($passwordConfirm) ) {
        return "ERROR_EMPTY_INPUT: o campo não pode estar vazio!";
    }

    if (strlen($name) < 3) {
        return "ERROR_SIZE_REQUIRED: O campo 'nome' tem que ter no mínimo 3 caracteres!";
    }

    if (strlen($senha) < 6 || strlen($passwordConfirm) < 6) {
        return "ERROR_SIZE_REQUIRED: O campo 'senha' precisa ter no mínimo 6 caracteres!";
    }

    if (strlen($senha) > 15 || strlen($passwordConfirm) > 15) {
        return "ERROR_SIZE_REQUIRED: O campo 'senha' precisa ter no máximo 15 caracteres!";
    }

    if ($age < 12 || $age > 100) {
        return "ERROR_INVALID_AGE: idade inválida, não temos suporte para essa idade!";
    }

    if (strlen($name) > 255 || strlen($email) > 255) {
        return "ERROR_SIZE_REQUIRED: O campo tem que ter no máximo 255 caracteres!";
    }

    if (trim($name) === '' || trim($age) === '') {
        return "ERROR_SPACE_ZERO: O campo não pode conter apenas espaços!";
    }

    if (strpos($senha, ' ') !== false || strpos($passwordConfirm, ' ') !== false) {
        return "ERROR_SPACE_ZERO: O campo 'senha' não pode conter espaços!";
    }

    if (preg_match('/\s{3,}/', $name)) {
        return "ERROR_SPACE_BETWEEN: O campo não pode conter mais de dois espaços seguidos entre os caracteres!";
    }

    if (ctype_digit($name)) {
        return "ERROR_TYPE_DIGIT: O campo 'nome' deve conter texto (letras, simbolos ou acentos), não só números!";
    }

    if ($senha !== $passwordConfirm) {
        return "ERROR_PASSWORD_CONFIRM: você precisa confirmar a sua senha, as duas senhas não coincidem!";
    }

    return true;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    if (isset($_POST['password_user']) || isset($_POST['password_conf'])) {
        $name = $_POST['names'];
        $age = $_POST['ages'];
        $gender = $_POST['genres'] ?? '';
        $email = $_POST['emails'];
        $senha = $_POST['password_user'] ?? '';
        $passwordConfirm = $_POST['password_conf'] ?? '';
        $validação = validarInput($name, $age, $gender, $email, $senha, $passwordConfirm);
        if ($validação === true) {
            echo "Input válido";
        } else {
            echo "Erro: " . $validação;
        }
    } else {
        echo "<p style='color: red;'>Erro: O campo de senha não foi enviado";
    }
}
?>