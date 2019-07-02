# Vue-play
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="../assets/js/Vue.js"></script>
</head>
<body>
    <h1>v-if&v-else&v-show</h1>
    <hr>
    <div id="app">
        <div v-if='islogin'Hi!></div>
        <div v-else>请登录</div>
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
