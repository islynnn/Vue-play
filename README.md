<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>WATCH</title>
</head>
<body>
    <h1>watch option</h1>
    <hr>
    <div id="app">
       <p>今日温度：{{temperature}}摄氏度</p>
       <p>穿衣建议：{{suggestion}}</p>
       <p><button @click="warm">warm</button>  <button @click="cool">cool</button></p>
    </div>

    <script type="text/javascript">
        var suggestion=["短袖短裤","长袖长裤","棉衣棉裤",]
        var app = new Vue ({
            el:"#app",
            data:{
                temperature:25,
                suggestion:suggestion[1]
            },
            methods:{
                warm:function(){
                    this.temperature+=5;
                },
                cool:function(){
                    this.temperature-=5;
                }
            },
            //watch:{
            //    temperature:function(newVal,oldVal){
            //        if(newVal>=26){this.suggestion=suggestion[0]}
            //        else if(newVal<26 && newVal>=0){this.suggestion=suggestion[1]}
            //        else{this.suggestion=suggestion[2]}
            //    }
            //}
        })
        app.$watch('temperature',function(newVal,oldVal){
            if(newVal>=26){this.suggestion=suggestion[0]}
            else if(newVal<26 && newVal>=0){this.suggestion=suggestion[1]}
            else{this.suggestion=suggestion[2]
            }
        })
            
    </script>
</body>
</html>
