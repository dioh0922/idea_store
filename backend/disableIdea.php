<?php
require_once(dirname(__FILE__)."/class/ideaStore.php");
$result = [];
if(isset($_POST["id"]) && $_POST["id"] !== ""){
	try{
		$store = new ideaStore();
		$affected = $store->disableIdea((int)$_POST["id"]);
		if($affected > 0){
			$result["result"] = 1;
		}else{
			$result["result"] = 0;
		}
	}catch(Exception $e){
		$result["result"] = -1;
		$result["message"] = $e->getMessage();
	}
}else{
	$result["result"] = -1;
	var_dump($_POST);
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
