<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>生命周期</title>
</head>
<body>
    <h1>vue钩子函数</h1>
    <hr>
    <div id="app">
        {{count}}
        <p>
            <button @click="add">add</button>
            <button @click="reduce">reduce</button>
        </p>
        <button onclick="app.$destroy()">销毁</button>
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                count:1,
            },
            methods:{
                add:function(){
                    this.count++;
                },
                reduce:function(){
                    this.count--;
                }
            },
            beforeCreate:function(){
                console.log('1-beforeCreate 初始化之后');
            },
            created:function(){
                console.log('2-created 创建完成');
            },
            beforeMount:function(){
                console.log('3-beforeMount 挂载之前');
            },
            mounted:function(){//此方法常用于加载单页动画
                console.log('4-mounted 被创建');
            },
            beforeUpdate:function(){
                console.log('5-beforeUpdate 数据更新前');
            },
            updated:function(){
                console.log('6-updated 被更新后');
            },
            activated:function(){
                console.log('7-activated');
            },
            deactivated:function(){
                console.log('8-deactivated');
            },
            beforeDestroy:function(){
                console.log('9-beforeDestroy 销毁之前');
            },
            destroyed:function(){
                console.log('10-destroyed 销毁之后')
            },
        })
            
    </script>
</body>
</html>
