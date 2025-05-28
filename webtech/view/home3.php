<?php
include '../control/action.php';
setcookie("user","1",time()+86400);
if(isset($_COOKIE['user'])){
    echo "you have visited the site";
}
else{
    echo "Welcome to site";
}
$_SESSION["user"]= "abc";
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ride-Sharing App Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Register for the Ride-Sharing App</h1>
        <form action=" " method="post" >
            <!-- Basic Information -->
            <fieldset class="form-section">
                <legend>Basic Information</legend>
                <label for="fullname">Full Name:</label><br>
                <input type="text" id="fullname" name="fullname" ><br>
                <span class="error-message"><?php echo $nameErr; ?></span>
 
                <label for="email">University Email Address:</label><br>
                <input type="email" id="email" name="email" ><br>
                <span class="error-message"><?php echo $emailErr; ?></span>
 
                <label for="phone">Phone Number:</label><br>
                <input type="tel" id="phone" name="phone" ><br>
                <span class="error-message"><?php echo $phoneErr; ?></span>
 
                <label for="password">Password:</label><br>
                <input type="password" id="password" name="password" ><br>
                <span class="error-message"><?php echo $passwordErr; ?></span>
 

                <label for="studentid">Student ID:</label><br>
                <input type="text" id="studentid" name="studentid" ><br><br>

                
            </fieldset>

            <!-- User Type Dropdown -->
            <fieldset class="form-section">
                <legend>User Type</legend>
                <label for="userType">Select your user type:</label><br>
                <select id="userType" name="userType" >
                    <option value="rider">Rider</option>
                    <option value="driver">Driver</option>
                </select><br><br>
            </fieldset>

            <!-- Preferences Checklist -->
            <fieldset class="form-section">
                <legend>Preferences</legend>
                <div class="checkbox-group">
                    <input type="checkbox" id="smoking" name="preferences[]" value="smoking">
                    <label for="smoking">Smoking allowed</label><br>
                    <input type="checkbox" id="pets" name="preferences[]" value="pets">
                    <label for="pets">Pets allowed</label><br>
                    <input type="checkbox" id="music" name="preferences[]" value="music">
                    <label for="music">Music preference</label><br><br>
                </div>
            </fieldset>

            <!-- Gender Radio Buttons -->
            <fieldset class="form-section">
                <legend>Gender</legend>
                <div class="radio-group">
                    <input type="radio" id="male" name="gender" value="male" >
                    <label for="male">Male</label><br>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label><br>
                    <input type="radio" id="other" name="gender" value="other">
                    <label for="other">Other</label><br><br>
                    <span class="error-message"><?php echo $genderErr; ?></span>
                    </div>
            </fieldset>

            <!-- Terms and Privacy Policy -->
            <fieldset class="form-section">
                <legend>Agreement</legend>
                <input type="checkbox" id="terms" name="terms">
                <label for="terms">I agree to the Terms & Conditions</label><br>
                <input type="checkbox" id="privacy" name="privacy">
                <label for="privacy">I agree to the Privacy Policy</label><br><br>
                <span class="error-message"><?php echo $termsErr; ?></span>
                </fieldset>

            <!-- Submit Button -->
            <input type="submit" value="Register" class="submit-btn">
        </form>
    </div>

    <script src="scripts.js?v=<?php echo time(); ?>"></script>
</body>
</html>
