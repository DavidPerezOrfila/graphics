<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv=refresh content=180>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>Gráfica Service Manager</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/graphic.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<!--Angular, moment, chart CDN-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.bundle.min.js"></script>
	<script src="js/angular-chart.min.js"></script>
	<script src="js/graphic.js"></script>
	<script src="js/graphicAngular.js"></script>
</head>
<body>
<div class="container-fluid">
	<div class="row col-xs-12 col-sm-12 col-mg-12 col-lg-12 col-xl-12">
		<div class="panel panel-success">
    <div class="panel-heading titulo"><center><img src="css/images/logo_grupodamm.gif" class="img-responsive" width="150" height="100" alt="logo" ></center><h3 class="text-center"><b>Interaciones reportadas al CSU</b></h3></div>
		<div class="panel-body">
			<div id="container" ng-init="Refresh()" ng-app="angularChart" ng-controller="LineCtrl" class='img-responsive'>
				<canvas id="line" class="chart chart-line" chart-data="data"
					chart-labels="labels" chart-series="series" chart-options="options"
					chart-dataset-override="datasetOverride" chart-click="onClick" >
				</canvas>
			</div>
			<div class="panel-heading titulo col-xs-12 col-sm-12 col-mg-12 col-lg-12 col-xl-12"></center><h5 class="text-center"><b>Incidencias de Prioridad 1 y 2</b></h5></div>
			<div class="col-xs-12 col-sm-12 col-mg-12 col-lg-12 col-xl-12">
			<table class="table table-bordered table-responsive">
					<tr class="bg-primary">
						<th>ID</th>
						<th>Titulo</th>
						<th>Estatus</th>
					</tr>
				<?php
					$dsn = "BBDD DAMM HPSM";
					$fecha = $_GET['fecha'];
					//debe ser de sistema no de usuario
					$usuario = "SMUSER";
					$clave = "SMUSER";
					$numero = "\"NUMBER\"";

					//realizamos la conexion mediante odbc
					$cid = odbc_connect($dsn, $usuario, $clave);

					if (!$cid){
						exit("<strong>Ya ocurrido un error tratando de conectarse con el origen de datos.</strong>");
					}

					// consulta SQL a nuestra tabla "probsummarym1"
					//$sql = "SELECT count(*) FROM probsummarym1";
					//$sql= "SELECT probsummarym1.BRIEF_DESCRIPTION FROM probsummarym1";
					$sql = "SELECT probsummarym1.$numero, probsummarym1.BRIEF_DESCRIPTION, probsummarym1.STATUS FROM probsummarym1 WHERE ( probsummarym1.PRIORITY_CODE='1' or probsummarym1.priority_code='2' ) AND ( (probsummarym1.OPEN_TIME>=sysdate-1 and probsummarym1.open_time<=sysdate) or (not probsummarym1.problem_status='Closed')) order by probsummarym1.$numero ASC";


					// $result=odbc_exec($cid,$sql)or die(exit("Error en odbc_exec"));
					$result=odbc_exec($cid,$sql)or var_dump($sql);
					//print odbc_result_all($result, class="table table-bordered");
					$i= 0;
					$arr = array();
					while ($row = odbc_fetch_array($result)) {
						$cm = $row['NUMBER'];
						$titulo = $row['BRIEF_DESCRIPTION'];
						$Status = $row['STATUS'];
						?>
						<tr align="center">
							<td><?php echo $cm; ?></td>
							<td><?php echo $titulo; ?></td>
							<td class="estado"><?php echo $Status; ?></td>
						</tr>
				<?php

					}
				?>

				</table>
			</div>
		</div>
		<div class="panel-footer titulo"><p class="text-center"><b>Centro de Control 2017</b></p></div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
