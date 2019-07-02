# Vue-play
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="../assets/js/Vue.js"></script>
    <title>Vue.js实例</hl></title>
</head>
<body>
    <h1>v-if&v-else&v-show</h1>
    <hr>
    <div id="app">
        <div v-if='islogin'Hi!></div>
    </div>

    <script type="text/javascript">
       var app = new Vue({
           el:'app',
           data:{
               islogin:true
           }
       })
    </script>
</body>
</html>
