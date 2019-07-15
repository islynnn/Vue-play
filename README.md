<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--引入vue-->
    <script type="text/javascript" src="Vue.js"></script>
    <title>HELLO WORLD</title>
</head>
<body>
    <!--View-->
    <h1>Hello~World</h1>
    <hr>
    <div id="app">
        {{word}}
        <input type="button" value="click1" v-on:click="show()"/>
        <input type="button" value="click2" @click="show()">
    </div>

    <script type="text/javascript">
        //Model
        var m ={
            word:'hello!world!'
        };

        //ViewModel
        var vm = new Vue ({
            el:"#app", //挂载点
            data:m,//数据
            //方法
            methods:{
                show(){
                    this.word='隔壁老黄';
                }
            }
        });
            
    </script>
</body>
</html>
