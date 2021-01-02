<?php

// http://quizz.motuo.info/registry.php/?cmd=data&type=x1

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: accept, content-type");

//  $date = date('U');

if( array_key_exists ( 'cmd' , $_GET )  ){
  switch( $_GET['cmd'] ){
    case 'data':
      return_data_file( $_GET['type'] );
      break;
    case 'list':
      return_files_list();
      break;
    default:
      return_nothing();
  }    
}
die();

// ---------------------------------------------------------------  
  

function return_nothing(){
  $jsonString = json_encode('');
  http_response_code(200);
  echo $jsonString;
}


function return_files_list(){
  $path    = '/registry';
  $files = scandir($path);  
  $json = array(
    'files'=>  $files,
    'msg' => 'list of files in data',
    'error' => false
  );
  $jsonString = json_encode($json);
  http_response_code(200);
  echo $jsonString;
}


function return_data_file( $type ){
  $response = array(
    'file'=> 'registry-'.$type.'.json',
    'msg' => 'data file',
    'error' => false
  );

  $fileFullRef = './registry/'.$response["file"] ;

  if( file_exists( $fileFullRef ) ){
    $content = file_get_contents( $fileFullRef );
    http_response_code(200);
    echo $content;
  }
  else{
    $json = array(
      'file'=> $response["file"],
      'msg' => 'file doesn`t exist',
      'error' => true
    );
    $jsonString = json_encode($json);
    http_response_code(404);
    echo $jsonString;
  }
} 

?>
