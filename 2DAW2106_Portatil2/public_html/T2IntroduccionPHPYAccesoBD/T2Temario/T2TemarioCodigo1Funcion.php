<!DOCTYPE html>
<!--
    @Created on : 10-oct-2016, 19:20:18
    @Author     : RVS - N.F.N.D
    @Pag        :
    @version    :
-->
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <?php

    /**
     * 
     * @param type $base
     * @param type $porcentaje
     * @return type
     */
    function calcular_iva($base, $porcentaje) {
      $total = $base * $porcentaje / 100;
      return $total;
    }
    
    
    
    ?>
  </body>
</html>
