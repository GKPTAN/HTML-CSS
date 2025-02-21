<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST['names']);
    $age = $_POST['ages'];
    $gender = $_POST['genres'];
    $email = trim($_POST['emails']);
    $passwords = trim($_POST['passwords']);
    $data_atual = date('d/m/Y');
    $hora_atual = date('H:i:s');

    $server = 'localhost';
    $root = 'root';
    $senha = '';
    $database = 'gym_users';

    $conn = new mysqli($server, $root, $senha, $database);

    if ($conn->connect_error) {
        die("Falha ao se comunicar com o banco de dados: " . $conn->connect_error);
    }

    if ($name)

    $smtp = $conn->prepare("INSERT INTO users (name, age, gender, email, password, date, hours) VALUES (?,?,?,?,?,?,?)");
    $smtp->bind_param("sisssss", $name, $age, $gender, $email, $password, $data_atual, $hora_atual);
    if ($smtp->execute()) {
        echo "dados enviados com sucesso!";
    } else {
        echo "Erro no envio dos dados" . $smtp->error;
    }
    $smtp->close();
    $conn->close();
}
?>