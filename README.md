<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../asset/js/vue.js"></script>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>
    <hr>

    <script type="text/javascript">
        var app=new Vue({ //创建实例
            el:'#app', //定义绑定元素
            data:{ //定义变量值
                message:'hello world'
            }
        })
    </script>
</body>
</html>
