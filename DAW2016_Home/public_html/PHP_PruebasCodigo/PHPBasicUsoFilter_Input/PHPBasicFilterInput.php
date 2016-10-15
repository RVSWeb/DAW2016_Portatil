<!DOCTYPE html>
<!--
    @Created on : 10-oct-2016, 22:01:17
    @Author     : RVS - N.F.N.D
    @Pag        : http://php.net/manual/es/function.filter-input.php
    @version    :
-->
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <div>
      <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <input type="text" name="buscar" value=""><br />
        <input type="submit" name="enviar"><br />
      </form>
    </div>

    <?php
    $buscar_html = filter_input(INPUT_GET, 'buscar', FILTER_SANITIZE_SPECIAL_CHARS);
    echo "Has buscado " . $buscar_html . " \n";
    ?>
  </body>
</html>
