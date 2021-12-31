<?php
class ideaStore{

	private $connection = null;
	public function __construct(){
		require_once(dirname(__FILE__)."/../../env/connection_setting.php");
		$this->connection = new mysqli($SQL_HOST, $SQL_USER, $SQL_PASS, $SQL_DB);
		if ($this->connection->connect_error) {
			$this->connection = null;
			throw new Exception($this->connection->connect_error);
		} else {
		  $this->connection->set_charset("utf8");
		}
	}

	public function __destruct(){
		$this->connection->close();
	}

	public function getIdeaList(){
		$list = [];
		$sql = "SELECT id, name, DATE_FORMAT(idea_store.date, '%Y-%m-%d') as idea_date FROM idea_store WHERE is_delete = 0";
		if($result = $this->connection->query($sql)){
			while($row = $result->fetch_assoc()){
				$list[] = $row;
			}
			$result->close();
		}
		return $list;
	}
}
?>
