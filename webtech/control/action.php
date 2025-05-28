<?php
include '../model/mydb.php';
session_start();
$nameErr = $emailErr = $phoneErr = $passwordErr  = $genderErr = $termsErr = "";
$fullname = $email = $phone = $password  = $gender = $terms = "";
 $haserror= 0;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Full Name
    if (isset($_POST['fullname']) && $_POST['fullname'] == "") {
        $nameErr = "Name is required.";
         $haserror =1;
    } else {
        $fullname = $_POST['fullname'];
    }
 
    // Email
    if (isset($_POST['email']) && $_POST['email'] == "") {
        $emailErr = "Email is required.";
         $haserror =1;
    } else {
        $email = $_POST['email'];
    }
 
    // Phone
    if (isset($_POST['phone']) && $_POST['phone'] == "") {
        $phoneErr = "Phone is required.";
         $haserror =1;
    } else {
        $phone = $_POST['phone'];
    }
 
    // Password
    if (isset($_POST['password']) && $_POST['password'] == "") {
        $passwordErr = "Password is required.";
         $haserror =1;
    } else {
        $password = $_POST['password'];
    }
 
    // DOB
   /* if (isset($_POST['dob']) && $_POST['dob'] == "") {
        $dobErr = "Date of Birth is required.";
    } else {
        $dob = $_POST['dob'];
    }*/
 
    // Gender
    if (!isset($_POST['gender'])) {
        $genderErr = "Gender is required.";
         $haserror =1;
    } else {
        $gender = $_POST['gender'];
    }
 
    // Terms
    if (!isset($_POST['terms'])) {
        $termsErr = "You must agree to terms.";
         $haserror =1;
    } else {
        $terms = $_POST['terms'];
    }
 
    // If all errors are empty
    /*if ($nameErr == "" || $emailErr == "" || $phoneErr == "" || $passwordErr == ""  || $genderErr == "" || $termsErr == "") {
        echo "<h2>Registration Successful</h2>";
        echo "<p>Full Name: $fullname</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Phone: $phone</p>";
        echo "<p>Password: $password</p>";
        //echo "<p>Date of Birth: $dob</p>";
        echo "<p>Gender: $gender</p>";
        echo "<p>Terms Agreed: $terms</p>";
    }
    else {
        echo "<p>Full Name: $nameErr</p>";
        echo "<p>Email: $emailErr</p>";
        echo "<p>Phone: $phoneErr</p>";
        echo "<p>Password: $passwordErr</p>";
       // echo "<p>Date of Birth: $dobErr</p>";
        echo "<p>Gender: $genderErr</p>";
        echo "<p>Terms Agreed: $termsErr</p>";
    }*/
     if ($haserror == 0) {
        // Insert into DB
        $conn = createcon();
        if(insertdata($conn, $fullname,$password, $email, $userType, $gender, $terms))
        {
                header("location: ../view/login.php");
        }
        else {
           $message = mysqli_error($conn);
        }
        closecon($conn);
    } 
}
?>
 
 
