<?php

class Locatr {

private static function getFinalUrl() {
    return html_entity_decode(BASE_API_URL.$_REQUEST["action"].
    "/".DATA_OUTPUT_TYPE.
    "?".$_SERVER['QUERY_STRING']);
  }



  private static function sendCurlRequest() {


    
$curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => self::getFinalUrl(),
    CURLOPT_SSL_VERIFYPEER => FALSE,
    CURLOPT_SSL_VERIFYHOST => FALSE,
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'));
 
    // Send the request & save response to $resp
    $response = curl_exec($curl);
 
    // Close request to clear up some resources
    curl_close($curl);
 
    return $response;
  }

  


public static function getNearBySearchLocations() {
    try {
      $data = json_decode(self::sendCurlRequest());
      $item = "";
 
      for ($i = 0; $i < count($data -> results); $i++) {
        $item = $data -> results[$i];
        if (isset($item -> photos)) {
          $imageUrl = BASE_API_URL.
          "photo?photoreference=".$item -> photos[0] -> photo_reference.
          "&sensor=false&maxheight=300&maxwidth=300&key=".$_GET["key"];
          $data -> results[$i] -> photos[0] -> url = $imageUrl;
        }
      }
 
      echo json_encode($data);
    } catch (Exception $e) {
      print "Error at getNearBySearchLocations : ".$e -> getMessage();
    }
  }

 /**
   * Get place details along with all the photo urls. 
   * @return String 
   */
  public static function getPlaceDetails() {
    try {
      $data = json_decode(self::sendCurlRequest());
      $item = $data->result;

      if (isset($item->photos)) {
        for ($i = 0; $i < count($item->photos); $i++) {
          $item->photos[$i]->url = BASE_API_URL . "photo?photoreference=" . $item->photos[$i]->photo_reference
                  . "&sensor=false"
                  . "&maxheight=" . IMAGE_MAX_HEIGHT
                  . "&maxwidth=" . IMAGE_MAX_WIDTH
                  . "&key=" . $_REQUEST["key"];
        }
      }

      return json_encode($data);
    } catch (Exception $e) {
      print "Error at getPlaceDetails : " . $e->getMessage();
    }
  }

}

?>