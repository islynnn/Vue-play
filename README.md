<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>propsData Option</title>
</head>
<body>
    <h1>propsData Option</h1>
    <hr>
    <header></header>

    <script type="text/javascript">
    var header_a = Vue.extend({
        template:`<P>{{message}}-{{a}}</p>`,
            data:function(){
                return{
                    message:'lululu'
                }
            },
            props:['a']
    });
    new header_a({
        propsData:{
            a:1
        }
    }).$mount('header')
    </script>
</body>
</html>
