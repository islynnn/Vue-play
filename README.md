<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>DIRECTIVE</title>
</head>
<body>
    <h1>vue~directive</h1>
    <hr>
    <div id="app">
        <div v-Lynn="color">{{num}}</div>
        <p><button @click="add">ADD</button></p>
    </div>
    <p>
        <button onclick="unbind()">解绑</button>
    </p>

    <script type="text/javascript">
    function unbind(){
        app.$destroy();
    }
      //下定义时Vue.directive一定要首字母大写！！！
    Vue.directive("Lynn",{
        bind:function(el,binding){//被绑定
        console.log('1 - bind');
        el.style="color:"+binding.value;
        },
        inserted:function(){//绑定节点
        console.log('2 - inserted');
        },
        update:function(){//组件更新
        console.log('3 - update');
        },
        componentUpdate:function(){//组件更新完成
        console.log('4 - componentUpdate');
        },
        unbind:function(){//解绑
        console.log('5 - unbind');
        },
    });

        var app = new Vue ({
            el:"#app",
            data:{
                num:"10",
                color:'orange',
            },
            methods:{
                add:function(){
                    this.num++;
                }
            }
        })
            
    </script>
</body>
</html>
