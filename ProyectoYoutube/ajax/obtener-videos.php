<?php 
	$archivo = fopen("../data/videos.json", "r");
	$linea = "";
	$videos = array();
	while ($linea = fgets($archivo)) {
		$video = json_decode($linea, true);
		$videos[] = $video;
	}
	fclose($archivo);
	echo json_encode($videos);
?>