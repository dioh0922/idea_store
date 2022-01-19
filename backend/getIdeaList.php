<?php
require_once(dirname(__FILE__)."/class/ideaStore.php");
$result = [];
try{
	$store = new ideaStore();
	$result["result"] = 1;
	$result["list"] = $store->getIdeaList();
}catch(Exception $e){
	$result["result"] = -1;
	$result["message"] = $e->getMessage();
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
