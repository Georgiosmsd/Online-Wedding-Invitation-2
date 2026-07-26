<?php
$servername = "localhost";
$username = "u546040390_maxnina";
$password = "Maxnina2026";
$dbname = "u546040390_guests";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$coming = $_POST['coming'];
$adults = (int)$_POST['adults'];
$children = (int)$_POST['children'];
$message = $_POST['message'];

$stmt = $conn->prepare(
  "INSERT INTO guest (name, surname, phone, email, coming, adults, children, message)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
);
$stmt->bind_param("sssssiis",
  $name,
  $surname,
  $phone,
  $email,
  $coming,
  $adults,
  $children,
  $message
);

if ($stmt->execute()) {
    $main_guest_id = $conn->insert_id;

    $update_sql = "UPDATE guest SET ";
    $update_params = [];
    $update_types = "";

    for ($i = 1; $i <= 10; $i++) {
        if (!empty($_POST["guest_{$i}_name"]) || !empty($_POST["guest_{$i}_surname"])) {
            $extra_name = trim($_POST["guest_{$i}_name"] ?? '');
            $extra_surname = trim($_POST["guest_{$i}_surname"] ?? '');
            $full_name = trim("$extra_name $extra_surname");

            $update_sql .= "extra_guest{$i} = ?, ";
            $update_params[] = $full_name;
            $update_types .= "s";
        }
    }

    $update_sql = rtrim($update_sql, ", ") . " WHERE id = ?";
    $update_params[] = $main_guest_id;
    $update_types .= "i";

    if (count($update_params) > 1) {
        $stmt_update = $conn->prepare($update_sql);
        $stmt_update->bind_param($update_types, ...$update_params);
        $stmt_update->execute();
        $stmt_update->close();
    }

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
