<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>组件1</title>
</head>
<body>
    <h1>vue~component</h1>
    <hr>
    <div id="app">
       <aaa here="Zeus"></aaa>
       <hr>
       <bbb from-here="Lucis"></bbb>
    </div>
   

    <script type="text/javascript">
    //注册全局组件
    Vue.component('aaa',{
        template:`<div style="color:orange">component-1 from {{here}}</div>`,
        props:['here']
    })
        var app = new Vue ({
            el:"#app",
            components:{
            "bbb":{
                template:`<div style="color:blue;">component-2 from {{fromHere}}</div>`,
                props:['fromHere'],
                }
            }
        })
    </script>
</body>
</html>
