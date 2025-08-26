<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name  = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $phone = $_POST["phone"] ?? '';

    if ($name && $email && $phone) {
        $clients = [];
        if (file_exists("clients.json")) {
            $clients = json_decode(file_get_contents("clients.json"), true);
            if (!is_array($clients)) $clients = [];
        }

        $clients[] = [
            "name"  => $name,
            "email" => $email,
            "phone" => $phone
        ];

        file_put_contents("clients.json", json_encode($clients, JSON_PRETTY_PRINT));
    }
}
header("Location: login.php");
exit;
