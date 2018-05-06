<?php
while ($data = $result->fetch_assoc()) {
	echo "<a>" . $data['SensorName'] . "</a>";
?>