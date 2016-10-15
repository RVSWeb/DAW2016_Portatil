<!DOCTYPE html>
<!--
    @Created on : 10-oct-2016, 22:42:40
    @Author     : RVS - N.F.N.D
    @Pag        :
    @version    :
-->
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/micss.css">
    <title>Tabla 1 ! </title>
  </head>
  <body>
    <?php
    $contador = 0;
    echo "<table class='nuevo2'>";
    echo "<th colspan='5'> Tabla de Multiplicar del Numero </th>";
    for ($v1 = 0; $v1 < 11; $v1++) {
      echo "<tr align='center'>";
      echo "<td> ", $_REQUEST['numero'], ' x ', " $contador", " = ", $_REQUEST['numero'] * $contador++, " </td>";
      echo "<br /> ";
      echo "</tr>";
      echo "</table>";
    }
    ?>
  </body>
</html>
