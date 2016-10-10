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

    class MiClase {

      public $var = '<h1>soy una variable de clase</h1>';

      public function mostrarVar() {
        echo $this->var;
      }

      private function resetVar() {
//      Este objeto
        $this->var = '';
      }

      function calcular_iva($base, $porcentaje) {
        $total = $base * $porcentaje / 100;
        return $total;
      }

    }

    $base_1 = 1114;
    $porcentaje_1 = 114;

    $miObjeto = new MiClase();
    $miObjeto->mostrarVar();

    echo " valor base : " . $base_1 . " <br />";
    echo " valor porcentaje : " . $porcentaje_1 . " <br />";
    $ver = $miObjeto->calcular_iva($base_1, $porcentaje_1);
    echo " valor : " . $ver;
    ?>
  </body>
</html>
