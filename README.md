<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>制作模板</title>
</head>
<body>
    <h1>vue~complate</h1>
    <hr>
    <div id="app">
       {{message}}
    </div>
    <hr>
    <!--第二种方法：在标签里建立模板使用挂载法的好处是适合长语句，可以直接复制粘贴-->
    <!--
        <template id="demo2">
        <h2 style="color:blue">模板选项</h2>
         </template>
    <hr>
    -->
    <!--第三种方法：用script写-->
    <script type="x-template" id="model">
        <h1 style="color:orange">Model</h1>
    </script>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                message:"hello world!!!!!"
            },
            //第一种方法：直接在构造器里制作模板，适合很小的仅有几句的模板形式
            //因为双引号单引号太多，vue使用撇号 在template语句中
            //template:`  
            //<h1 style="color:orange">模板选项</h1>
            //,
            //template:"#demo2",
        })
            
    </script>
</body>
</html>
