<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>V-IF&V-ELSE</title>
</head>
<body>
    <h1>IF&ELSE</h1>
    <hr>
    <div id="app">
        <div v-if="islogin">你好</div> <!--判断是否加载，真值加载，假值不加载，减轻服务器压力-->
        <div v-show="islogin">你好</div><!--判断是否隐藏，让客户端更流畅-->
        <div v-else>请登陆</div>
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                islogin:false           
             }
        })
            
    </script>
</body>
</html>
