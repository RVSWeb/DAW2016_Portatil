<!DOCTYPE html>
<!--
    @Created on : 10-oct-2016, 19:02:37
    @Author     : RVS - N.F.N.D
    @Pag        :
    @version    :
-->
<html>
  <head>
    <meta charset="UTF-8">
    <title>Enviar</title>
  </head>
  <body>
    <?php
    if (isset($_REQUEST['enviar']) && $_REQUEST['numero'] != '') {
      if ($_REQUEST['numero'] >= 0) {
        echo " Tabla Multiplicar :  ";
        echo $nn = 0;
        for ($numero = 0; $numero < 11; $numero++) {
          echo $nn++ . " x ";
          echo $_REQUEST['numero'] . " = ";
          echo $_REQUEST['numero'] * $numero . " | ";
          echo "<br>";
        }
      }
    }
    if (isset($_REQUEST['enviar']) == true) {
      echo '<a href="./PHPEjercicio02.php" title="Volver a la pagina anterior"> </a>';
    }
    ?>
  </body>
</html>
