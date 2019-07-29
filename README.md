<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="./vue.js"></script>
    <title>EXTEND</title>
</head>
<body>
    <h1>extend</h1>
    <div id="app">
        {{message}}
        <br>
        ${message}
        <br>
        <button @click="add">add</button>
    </div>

    <script type="text/javascript">
        var bbb={
            created:function(){
                console.log('我是被扩展出来的')
            },
            methods:{
                add:function(){
                    console.log('我是被扩展出来的方法')
                }
            }
        }
        var app=new Vue({
            el:"#app",
            data:{
                message:"1"
            },
            methods:{
                add:function(){
                    console.log('我是原生的方法')
                }
            },
            extends:bbb,
            delimiters:['${','}']
        })
    </script>
</body>
</html>
