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
    //var bbb={
        //template:'<div>Lucas</div>'}
    Vue.component ("bbb",{
        template:`<div style="color:blue">Lucas</div>`})
    Vue.component('aaa',{
        template:`<div style="color:orange">
        <p>Zeus</p>
        <hr>
        <bbb></bbb>
        <hr>
        </div>`
    })
        var app = new Vue ({
            el:"#app",
        })
    </script>
</body>
</html>
