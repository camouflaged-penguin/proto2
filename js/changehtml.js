// bhange html on the fly




<html>
  <head>
    <script type="text/javascript">
      function open_fun() {
        document.getElementById('link').innerHTML = "<a href='javascript:clo_fun()'>CLOSE</a>";
      }
      function clo_fun() {
        document.getElementById('link').innerHTML = "<a href='javascript:open_fun()'>OPEN</a>";
      }
    </script>
  </head>
  <body>
    <div id='link'><a href='javascript:open_fun()'>OPEN</a></div>
  </body>
</html>
