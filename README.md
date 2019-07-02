# Vue-play
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello World</title>
    <!--引入Vue.js-->
    <script src="./js/vue.js"></script>
    <script>
            //Module
            var m = {
                word: 'Hello,World! I am  Vue'
            };
    
            //ViewModel
            var vm = new Vue ({
                el:'#app',//挂载点
                data: m
            });
        </script>
</head>
<body>
    <!--View-->
    <div id="app">
        <h3>{{word}}</h3>
    </div>
    
</body>
</html>
