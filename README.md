<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>计算选项</title>
</head>
<body>
    <h1>computed</h1>
    <hr>
    <div id="app">
       <p>{{newPrice}}</p>
        <ul>
            <li v-for="item in reverseNews">{{item.title}}-{{item.date}}</li>
        </ul>
    </div>

    <script type="text/javascript">
    var newsList=[
        {title:'香港或就“装甲车被扣”事件追责 起诉涉事运输公司',date:'2017/3/10'},
        {title:'日本第二大准航母服役 外媒：针对中国潜艇',date:'2017/3/12'},
        {title:'中国北方将有明显雨雪降温天气 南方阴雨持续',date:'2017/3/13'},
        {title:'起底“最短命副市长”：不到40天落马，全家被查',date:'2017/3/23'},
    ];
        var app = new Vue ({
            el:"#app",
            data:{
                Price:'100',
                newsList:newsList
            },
            computed:{
                newPrice:function(){
                    return newPrice="人民币"+this.Price+"元"
                },
                reverseNews:function(){
                    return this.newsList.reverse();
                }
            }
        })
            
    </script>
</body>
</html>
