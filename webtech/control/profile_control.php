<?php
include "../model/mydb.php";
session_start();

// Check if session is set
if (!isset($_SESSION["fullName"])) {
    header("Location: login.php"); // redirect to login if not logged in
    exit();
}

$fullName = $_SESSION["fullName"];
$conobj = createcon();
$result = fetchuserdata($conobj, $fullName);
$userData = null;

if ($result && mysqli_num_rows($result) > 0) {
    $userData = mysqli_fetch_assoc($result);
}

closecon($conobj);
?>
