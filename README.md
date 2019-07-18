<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>双向数据绑定</title>
</head>
<body>
    <h1>v-model</h1>
    <hr>
    <div id="app">
        <p>原始文本信息{{message}} I'm Vue</p>
        <h3>文本框</h3>
        <p><input type="text" v-model="message"></p>
        <p>.lazy<input type="text" v-model.lazy="message"></p><!--修饰符lazy,让输入框内容延迟显示-->
        <p>.number<input type="text" v-model.number="message"></p><!--如果输入的第一个字符是数字那么后面的字母以及字母后面的数字都不再绑定-->
        <p>.lazy.number<input type="text" v-model.lazy.number="message"></p><!--可以用多个修饰符-->
        <p>.trim<input type="text" v-model.trim="message"></p><!--消除前后空格-->
        <h3>文本框</h3>
        <textarea cols="30" rows="10" v-model="message"></textarea>
        <h3>多选框绑定一个值</h3>
        <input type="checkbox" id="isTrue" v-model="isTrue"><!--id和v-model可以不是一样的值-->
        <label for="isTrue">{{isTrue}}</label>
        <hr>
        <h3>多选框绑定数组</h3>
        <p>
            <input type="checkbox" id="Lily" value="Lily" v-model="Web_name">
            <label for="isTrue">Lily</label>
            <input type="checkbox" id="Panda" value="Panda" v-model="Web_name">
            <label for="isTrue">Panda</label>
            <input type="checkbox" id="Lynn" value="Lynn" v-model="Web_name">
            <label for="isTrue">Lynn</label>
        </p>
        <p>{{Web_name}}</p>
        <hr>
        <h3>单选框绑定</h3>
        <input type="radio" id="one" value="女" v-model="sex">
        <label for="one">女</label>
        <input type="radio" id="two" value="男" v-model="sex">
        <label for="two">男</label>
        <p>你选择的性别是：{{sex}}</p>
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                message:"hello world!!!!!",
                isTrue:true,
                Web_name:[],
                sex:'女'
            }
        })
            
    </script>
</body>
</html>
