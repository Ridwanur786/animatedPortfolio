<?php
$testConnection = mysql_connect('localhost', 'root', '');
if (!$testConnection) {
    die('Error: ' . mysql_error());
}
echo 'Database connection working!';
mysql_close($testConnection);
