<?php


// Check if form is submitted (assuming a form with button and URL field)
if (isset($_POST['url'])) {

    $imageUrl = $_POST['url'];


    // If valid URL, download the image using cURL
    if ($imageUrl) {
        $ch = curl_init($imageUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);

        $imageData = curl_exec($ch);
        $curlError = curl_error($ch);

        curl_close($ch);

        if ($curlError) {
            echo "Error downloading image: " . $curlError;
        } else {
            header('Content-Type: image/jpeg');
            header('Content-Disposition: attachment; filename="YT_Thumbnail_HD.jpg"');
            echo $imageData;
        }
    }
}
