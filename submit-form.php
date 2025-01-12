<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Email configuration
    $to = "kijanihub@gmail.com"; // Email to receive submissions
    $subject = "New GKIT Application Submission";
    $headers = "From: no-reply@gkit.org\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Collecting form data
    $message = "You have received a new application:\n\n";
    $message .= "Business Name: " . $_POST['business-name'] . "\n";
    $message .= "Certificate Number: " . $_POST['certificate-no'] . "\n";
    $message .= "Family Name: " . $_POST['family-name'] . "\n";
    $message .= "First Name: " . $_POST['first-name'] . "\n";
    $message .= "Date of Birth: " . $_POST['dob'] . "\n";
    $message .= "Sex: " . $_POST['sex'] . "\n";
    $message .= "Phone: " . $_POST['phone'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Skills: " . $_POST['skills'] . "\n";
    $message .= "Dream: " . $_POST['dream'] . "\n";
    $message .= "Resources: " . $_POST['resource'] . "\n";

    // Sending the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your application has been submitted successfully.";
    } else {
        echo "Sorry, there was an issue sending your application. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
