<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>指令标签属性绑定</title>
</head>
<body>
    <h1>v-bind</h1>
    <hr>
    <div id="app">
        <p><img v-bind:src="imgsrc" width="300px" ></p>
        <!--同一p标签的内容在同一行-->
        <p><a :href="webUrl"  target="_blank">努力学前端叭</a></p>
        <!--:herf是缩写-blank在新窗口中打开-->
        <hr>
        <div :class="classname">1、绑定class</div>
        <div :class="[classA,classB]">2、绑定class中的数组</div>
        <div :class="{classA:isOK}">3、绑定class判断</div>    
        <div :class="isOK?classA:classB">4、绑定class三元表达式判断</div>
           <input type="checkbox" id="isTrue" v-model="isOK">
           <label for="isTrue">isOK={{isOK}}</label>
        <div :style="{color:blue,fontSize:font}">5、绑定style</div>
        <div :style="styObject">6、用对象绑定style</div>
    </div>
    <style>
        .classA{
            color:rgb(255, 208, 0)
        }
        .classB{
            font-size: 150%;
        }
    </style>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                imgsrc:'https://jspang.com/images/Redux_index.png',
                webUrl:'https://jspang.com',
                classname:'classA',
                isOK:true,
                classA:'classA',
                classB:'classB',
                blue:'blue',
                font:'30px',
                styObject:{
                    color:'blue',
                    fontSize:'50px',
                }
            }
        })
    </script>
</body>
</html>
