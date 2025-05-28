<?php

function createcon(){
    return new mysqli("localhost", "root", "", "event");
}

function insertdata($conn, $fullname, $email, $password,  $userType, $gender, $terms){
    $sql = "INSERT INTO EVENT (Fullname, emailaddress, password, Usertype, Gender, Agreement) 
        VALUES ('$fullname', '$email','$password', '$userType', '$gender', '$terms')";
        

    if ($conn -> query($sql))
    {
        return true ;
    }
 else {
    return false;
 }

}

function closecon($conn){
    $conn -> close();
}

function checklogin($conn, $fullname, $password)
{
    $sql = "SELECT Fullname , password FROM EVENT WHERE Fullname = '$fullname' AND password = '$password'";
    return mysqli_query($conn, $sql);
}

function fetchuserdata($conn, $fullname){
    $sql = "SELECT * FROM EVENT WHERE Fullname = '$fullname'";
    return mysqli_query($conn, $sql);
}
?>