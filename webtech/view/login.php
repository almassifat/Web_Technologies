<?php 
include '../Control/login_control.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Organizer Login</title>
    <link rel="stylesheet" href="login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <h1 class="sticky-header">Organizer Login</h1>

    <form id="loginForm" action=" " method="post">
        <fieldset id="loginFieldset">
            <legend>Login</legend>
            <table>
                <tr>
                    <td><label for="username">Username:</label></td>
                    <td><input type="text" id="username" name="username" required></td>
                </tr>
                <tr>
                    <td><label for="password">Password:</label></td>
                    <td><input type="password" id="password" name="password" required></td>
                </tr>
            </table>
        </fieldset>
        <input type="submit"  name = "submit" value="Login">
    </form>

</body>
</html>