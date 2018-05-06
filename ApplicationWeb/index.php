<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Style.css">
         <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin=""/>
          <!-- Make sure you put this AFTER Leaflet's CSS -->
          <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>
          <script src="Script.js"></script>
        <title>StatRoute</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
     
    <body id="body" class="light-mode">
      <?php include 'Bandeau.html'; ?>
      <nav id="titreMap">
        <h1> Carte de Lannion </h1>
      </nav>
      <div id="mapLannion">
         
      </div>
      <div id="sensor-list" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <h1>Listes Capteurs</h1>
        <?php include 'Connexion.php'; ?>
        <?php 
        while ($data = mysqli_fetch_assoc($request)) {
          echo "<a>" . $data['SensorName'] . "</a>";
        }
        mysqli_free_result($request);
        ?>
      </div>
      <div id="sensor-data" class="sensorData">
        <?php include 'Connexion.php'; ?>
        <?php
         while ($data = mysqli_fetch_assoc($request)) {
          echo "<a>" . $data['SensorName'] . "  : " . $data['SensorData'] . "</a>";
        }
        mysqli_free_result($request);
        ?>
        
      </div>
    </body>
</html>