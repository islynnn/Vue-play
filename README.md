<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>HELLO WORLD</title>
</head>
<body>
    <h1>Hello~World</h1>
    <hr>
    <div id="app">
        {{message}}
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                message:"hello world!!!!!"
            }
        })
            
    </script>
</body>
</html>
