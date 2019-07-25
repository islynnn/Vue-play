<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>组件3</title>
</head>
<body>
    <h1>vue~component</h1>
    <hr>
    <div id="app">
       <aaa></aaa>
    </div>
   

    <script type="text/javascript">
    var ccc = {
        template:'<div style="color:blue;">Zeus</div>',
    }
    var aaa = {
        template:`<div style="color:orange;">
        <p>Lucas</p>
        <ccc></ccc>
        </div>`,
        components:{
            "ccc":ccc
        }
    }
        var app = new Vue ({
            el:"#app",
            components:{
                "aaa":aaa
            }
        })
    </script>
</body>
</html>
