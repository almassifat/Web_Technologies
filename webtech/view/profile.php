<?php include '../control/profile_control.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Profile</title>
    <link rel="stylesheet" href="profile.css">

</head>
<body>

    <h2>User Profile</h2>
<p>Hello, <?php echo $_SESSION["fullName"]; ?> | <a href="../Control/logout.php">Logout</a></p>
    <?php if ($userData): ?>
        <table border="1" cellpadding="5" cellspacing="0">
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>ID</td>
                <td><?php echo $userData["Id"]; ?></td>
            </tr>
            <tr>
                <td>Full Name</td>
                <td><?php echo $userData["Fullname"]; ?></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><?php echo $userData["emailaddress"]; ?></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><?php echo $userData["password"]; ?></td>
            </tr>
            <tr>
                <td>User Type</td>
                <td><?php echo $userData["Usertype"]; ?></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td><?php echo $userData["Gender"]; ?></td>
            </tr>
            <tr>
                <td>Agreement</td>
                <td><?php echo $userData["Agreement"]; ?></td>
            </tr>
        </table>
    <?php else: ?>
        <p>No user data found.</p>
    <?php endif; ?>

</body>
</html>
