<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "sneakerstore";

    $conn = mysqli_connect($servername, $username, $password, $database);
    
    if ($conn->connect_error) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $card_number = $_POST['card_number'];
    $expiry_month = $_POST['expiry_month'];
    $expiry_year = $_POST['expiry_year'];
    $cvv = $_POST['cvv'];

    $sql = "INSERT INTO payment (name, phone, address, card_number, expiry_month, expiry_year, cvv) VALUES ('$name', '$phone', '$address', '$card_number', '$expiry_month', '$expiry_year', '$cvv')";
    //VALUES('$name', '$phone', '$address', '$card_number', '$expiry_month', '$expiry_year', '$cvv');

    if ($conn->query($sql) === TRUE) {
        echo"<script>alert('Checkout Complete!');</script>";
        echo"<script>window.setTimeout(function(){window.location.href='index.html';}, 1000);</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
