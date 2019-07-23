<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>扩展实例构造器</title>
</head>
<body>
    <h1>vue~extend</h1>
    <hr>
    <author></author>
    <script type="text/javascript">
        var authorURL = Vue.extend({//加入构造器元素
            template:"<p><a :href='authorURL'>{{authorName}}</a></p>",//模板的表达方式，标签上的属性要用：herf绑定
            data:function(){
                return {
                    authorName:'Lynn',
                    authorURL:"https://jspang.com",
                }
            }
    });
    new authorURL().$mount("author");//绑定标签
    </script>
</body>
</html>
