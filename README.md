<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>PRE&CLOAK&ONCE</title>
</head>
<body>
    <h1>pre~cloak~once</h1>
    <hr>
    <div id="app">
        <div v-pre>{{message}}</div>
        <div v-cloak>message</div><!--dom渲染完成才显示内容-->
        <div v-once>{{message}}</div>
        <div><input type="text" v-model="message"></div>
        <div>{{message}}</div>
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                message:"hello world!!!!!"
            }
        })
            
    </script>
</body>
</html>
