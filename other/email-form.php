<?php

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

?>

<?php

    $email_from = "cedavi23@ncsu.edu";
    $email_subject = "New Form Submission";
    $email_body = "$firstname $lastname has sent you a message.\n\n$message"

?>

<?php

    $to = "cedavi23@ncsu.edu";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";
    
    mail($to,$email_subject,$email_body,$headers);

?>