CREATE TABLE `golstar` (
   `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   `first_name` varchar(100) NOT NULL,
   `last_name` varchar(100) NOT NULL,
   `street` varchar(100) NOT NULL,
   `line2` INT(10) NOT NULL,
   `city` varchar(50) NOT NULL,
   `spr` varchar(50) NOT NULL,
   `postal` varchar(50) NOT NULL,
   `email` varchar(100) NOT NULL,
   `subject` varchar(255) NOT NULL,
   ` message` text NOT NULL,
   `sent_date` datetime NOT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8;