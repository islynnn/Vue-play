<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>从构造器外部操作构造器内部的数字、属性、方法</title>
</head>
<body>
    <h1>vue~set</h1>
    <hr>
    <div id="app">
       {{count}}
       <ul>
           <li v-for="item in arr">{{item}}</li>
       </ul>
        <p><button onclick="add()">add</button></p>
    </div>

    <script type="text/javascript">
    function add(){
       //Vue.set(outData,'count',2);//参数分别是数据名，数据值，具体的改变值。
       //app.count++;//操作数组时以下两种方法都不会自动更新
       //outData.count++;//
       //app.arr[1]='ddd';//令arr数组中的第二个元素在点击后变成ddd
       Vue.set(app.arr,1,'dd');//利用数组下标和Vue.set突破Javascript的限制
    }
        var outData = {
            count:1,
            //goods:'car',
            arr:['aaa','bbb','ccc'],
        }
        var app = new Vue ({
            el:"#app",
            data:outData,
        })
            
    </script>
</body>
</html>
