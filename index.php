<?php
require_once(dirname(__FILE__)."/backend/class/ideaStore.php");
try{
	$store = new ideaStore();
	$list = $store->getIdeaList();
}catch(Exception $e){
	echo $e->getMessage();
	exit();
}
?>
<!DOCTYPE html>
<html lang="ja" dir="ltr">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="./node_modules/tachyons/css/tachyons.min.css">
		<title>開発ネタ帳</title>
	</head>
	<body>
		<div class="tc">
			<h1 class="text-3xl font-bold underline">
				test tailwind
			</h1>
			<div class="tc" style="margin: auto;" id="idea-area"></div>
			<div id="app"></div>
			<script src="dist/index.js"></script>
		</div>
	</body>
</html>
