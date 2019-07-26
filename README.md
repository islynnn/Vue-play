<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>组件4</title>
</head>
<body>
    <h1>component标签</h1>
    <hr>
    <div id="app">
        <component v-bind:is="who"></component>
        <button @click="author">author</button>
    </div>

    <script type="text/javascript">
    var lynn={
        template:`<div style="color:orange;">Lynn</div>`
    }
    var zeus={
        template:`<div style="color:blue;">Zeus</div>`
    }
    var luacs={
        template:`<div style="color:green;">Lucas</div>`
    }
    var app=new Vue({
        el:'#app',
        data:{
            who:'lynn'
        },
        components:{
            "lynn":lynn,
            "zeus":zeus,
            "lucas":lucas,
        },
        methods:{
            author:function(){
                if(this.who=='lynn'){this.who='zeus';
                }else if(this.who=='zeus'){this.who='lucas'
                }else{this.who='lucas'}
            }
        }
    })
    </script>
</body>
</html>
