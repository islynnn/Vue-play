<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>METHODS</title>
</head>
<body>
    <h1>methods</h1>
    <div id="app">
        {{number}}
        <br>
        <button @click="add(2)">add</button>
        <P><btn @click.native="add(3)"></btn></P>
    </div>
    <button onclick="app.add(4)">外部调用</button>

    <script type="text/javascript">
    var btn={
        template:`<button>外部组件</button>`
    }
    var app=new Vue({
        el:"#app",
        data:{
            number:1,
        },
        components:{
            "btn":btn,
        },
        methods:{
            add:function(num){
                if(num!=''){this.number+=num}
                else{this.number++;}
                //return this.number+=num
            }
        }
    })
    </script>
</body>
</html>
