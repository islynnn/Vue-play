<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>TEXT&HTML</title>
</head>
<body>
    <h1>text&html</h1>
    <hr>
    <div id="app">
        <span>{{message}}</span><!--弊端:网速慢的时候提前显示未渲染内容/script渲染出错时露出-->
        <br>
        <span v-text="message"></span><!--优点:网速慢或script出错时不会露出-->
        <br>
        <span v-html="dodo"></span><!--弊端:易引起xss攻击，尽量不用-->
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                message:"hello world!!!!!",
                dodo:'<h2>hello world!!!!!</h2>'
            }
        })
            
    </script>
</body>
</html>
