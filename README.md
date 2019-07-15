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
        <div v-if="islogin">你好</div>
        <div v-else>请登陆</div>
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                islogin=true            }
        })
            
    </script>
</body>
</html>
