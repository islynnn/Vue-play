<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>V-ON</title>
</head>
<body>
    <h1>v-on</h1>
    <hr>
    <div id="app">
        本场比分{{score}}
        <br>
        <button v-on:click="plus">加分</button>
        <button @click="reduce">减分</button>
        <br>
        <input type="text" v-on:keyup.enter="onEnter" v-model="count">
        <!--绑定的按键可以用键盘码表示-->
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                score:0
            },
            methods:{
                plus:function(){
                    this.score++;
                },
                reduce:function(){
                    this.score--;
                },
                onEnter:function(){
                    this.score=this.score+parseInt(this.count)
                }
            }
        })
            
    </script>
</body>
</html>
