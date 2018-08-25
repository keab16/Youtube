<?php 
	$archivo = fopen("../data/videos/urlVideos.json", "r");
	$linea = "";
	$videos = array();
	while ($linea = fgets($archivo)) {
		$video = $linea;
		$videos[] = $video;
	}
	fclose($archivo);
	echo json_encode($videos);
?>