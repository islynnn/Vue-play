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

    <script type="text/javascript">
      //下定义时Vue.directive一定要首字母大写！！！
    Vue.directive("Lynn",function(el,binding){  //此处function一般用到三种参数：el\binding\vnode
        console.log(el); //el对应上面Dom定义的元素，本例是color
        console.log(binding);//binding是对象，具有多种属性
        console.log(binding.name);//自定义指令的名称
        el.style="color:"+binding.value;//el.style是原生写法，color的值通过binding.value和下面的color值绑定
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
