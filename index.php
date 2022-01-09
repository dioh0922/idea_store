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
  	<link href="./dist/css/output.css" rel="stylesheet">
		<title>開発ネタ帳</title>
	</head>
	<body>
			<h1 class="text-3xl font-bold underline">
				test tailwind
			</h1>
			<table class="table-auto">
				<thead>
					<tr class="bg-gray-100">
						<th class="px-4 py-2">ID</th>
						<th class="px-4 py-2">概要</th>
						<th class="px-4 py-2">日付</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach($list as $item){ ?>
						<tr>
							<td><?php echo $item["id"] ?></td>
							<td><?php echo $item["name"] ?></td>
							<td><?php echo $item["idea_date"] ?></td>
						</tr>
					<?php } ?>
				</tbody>
		</table>

			<div id="app"></div>
			<script src="dist/index.js"></script>
	</body>
</html>
