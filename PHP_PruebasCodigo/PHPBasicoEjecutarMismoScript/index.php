<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <?php
    if (isset($_POST['submit'])) {
      $name = $_POST['name'];
      echo "User Has submitted the form and entered this name : <b> $name </b>";
      echo "<br>You can use the following form again to enter a new name.";
    }
    ?>

    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
      <input type="text" name="name"><br />
      <input type="submit" name="submit" value="Submit Form"><br>
    </form>
  </body>
</html>
