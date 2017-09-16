<?php
  $fecha = $_GET['fecha'];
  $dsn = "BBDD DAMM HPSM";
  //debe ser de sistema no de usuario
  $usuario = "SMUSER";
  $clave = "SMUSER";


  //realizamos la conexion mediante odbc
  $cid = odbc_connect($dsn, $usuario, $clave);

  if (!$cid){
    exit("<strong>Ya ocurrido un error tratando de conectarse con el origen de datos.</strong>");
  }

  // consulta SQL;
  $fechaAnyo= "'dd/mm/yy'";
  $horaInicio= "' 08:00:00'";
  $fechaAnyoHora= "'dd/mm/yy hh24:mi:ss'";
  $horaFin= "' 20:00:00'";
  $dia= "'hh24'";
  $ceros= "':00'";
  $incident = incident_id;
  $openTime = open_time;
  $sql = "SELECT count($incident) as Incidencias from incidentsm1 where  $openTime+2/24  BETWEEN TO_DATE(TO_CHAR(SYSDATE-3, $fechaAnyo) || $horaInicio, $fechaAnyoHora) AND TO_DATE(TO_CHAR(SYSDATE-3, $fechaAnyo) || $horaFin, $fechaAnyoHora)  group by TO_CHAR($openTime, $dia) || $ceros  ORDER BY TO_CHAR($openTime, $dia) || $ceros";
  $result=odbc_exec($cid,$sql)or var_dump($sql);
  $events = array();
  while ($row = odbc_fetch_array($result)) {
    $events[] = array_map('utf8_encode', $row);

  }
  header('Content-type: application/json; charset=utf-8');
  echo json_encode($events);
?>