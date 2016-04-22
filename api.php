<?php 
	if(isset($_GET['search'])) {
		$search = $_GET['search'];
		$data = file_get_contents('https://spendabit.co/api/v0/go?q=' . $search); 
		echo $data;
	}
?>