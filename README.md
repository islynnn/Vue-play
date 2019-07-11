<!DOCTYPE html>
<html lang="en">
<head>
    <title>hello world</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="../asset/js/vue.js"></script>
</head>
<body>
    <h1>Hello World</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>
    <hr>

    <script type="text/javascript">
        var app=new Vue({
            el:"#app",
            data:{
                message:'hello world'
            }
        })
    </script>
</body>
</html>
