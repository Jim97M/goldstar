<!--PHP Database Input-->
<?php
include('connect.php');

 if(!empty($_POST["send"])){
	$first_name = $_POST["first_name"];
	$last_name = $_POST["last_name"];
	$street = $_POST["street"];
	$line2 = $_POST["line"];
	$city = $_POST["city"];
	$spr = $_POST["spr"];
	$postal = $_POST["postal"];
	$country = $_POST["country"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];

	//Recipient Email
	$toMail = "wabuyajames@gmail.com";

	//Build Email Header
	$header = "From: " . $first_name . "<" . $email . ">\r\n";
	//Send email
	if(mail($toMail, $message,$subject, $header)){
		
		//Store contactor data in database
		$sql = $conn-> query("INSERT INTO golstar(first_name, last_name, street, line2, city, spr, postal, country, email, message)VALUES('{$first_name}', '{$last_name}', {$street}, {$line2}, {$city} , {$spr} , {$postal}, {$country} , {$email}, {$message}) ");

        if(!$sql) {
			die("MySQL query failed.");
		} else {
			$response = array(
				"status" => "alert-success",
				"message" => "We have received your query and stored your information. We'll Give Feedback"
			);
		}
	} else {
		$response = array(
			"status" => "alert-danger",
			"message" => "Message couldn't be sent, try again"
		);
	}
}
?>
