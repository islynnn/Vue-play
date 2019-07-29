<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <script type="text/javascript" src="./jquery-3.4.1.js"></script>
    <title>EXAMPLE-1</title>
</head>
<body>
    <h1>example-1</h1>
    <hr>
    <div id="app">
       {{message}}
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                message:"hello world!!!!!"
            },
            //在Vue中使用Jquery
            mounted:function(){
                $('#app').html('我是Jquery');
            },
            methods:{
                add:function(){
                    console.log('调用了Add方法')
                }
                
            }
        })
        //打印app对象，看里面都用了什么属性和方法
        console.log(app);
        app.add();  
    </script>
</body>
</html>
