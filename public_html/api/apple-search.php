<?php 

// Include the secret file
include '../../config.inc.php';

// Capture the search query and make sure the query is URL safe (no spaces)
$searchQuery = urlencode($_GET['searchQuery']);

// Capture the media type
$mediaType = $_GET['mediaType'];

// User cURL to make our server talk to another server
$connection = curl_init();

// Prepare all the options for the connection
curl_setopt($connection, CURLOPT_URL, 'https://itunes.apple.com/search?term='.$searchQuery.'&media='.$mediaType.'&country=NZ');

// Make sure we get the raw data from Apple
curl_setopt($connection, CURLOPT_RETURNTRANSFER, true);

// We are stuck behind a proxy in class
// Make sure we include username/password to get through it
curl_setopt($connection, CURLOPT_PROXY, 'proxy');
curl_setopt($connection, CURLOPT_PROXYPORT, '3128');
curl_setopt($connection, CURLOPT_PROXYUSERPWD, YOOBEE_USERNAME.':'.YOOBEE_PASSWORD);

// Run the connection
$dataFromApple = curl_exec($connection);

// Prepare the header
header('Content-type: application/json');

echo $dataFromApple;