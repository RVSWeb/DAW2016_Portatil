<!DOCTYPE html>
<!--
    @Created on : 10-oct-2016, 19:20:18
    @Author     : RVS - N.F.N.D
    @Pag        : 33
    @version    :
-->
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
      <p>Nombre <br /></p>
      <input type="text" name="nombre">
      <p>Apellidos<br /></p>
      <input type="text" name="apellidos">
      <p>Enviar<br /></p>
      <input type="submit" name="enviar">
    </form>

    <?php
    if (isset($_POST['enviar'])) {
      $nombre = $_POST['nombre'];
      $apellidos = $_POST['apellidos'];
      echo "<br />";
      echo "La variable nombre vale : " . $nombre . " <br />";
      echo "La variable apellidos vale : " . $apellidos . " <br />";
    }
    ?>
  </body>
</html>
