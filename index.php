<?php
require_once(dirname(__FILE__)."/backend/ideaStore.php");
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
		<title></title>
	</head>
	<body>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>概要</th>
						<th>日付</th>
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
