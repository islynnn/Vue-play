<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="Vue.js"></script>
    <title>FOR&ITEMS</title>
</head>
<body>
    <h1>for and items</h1>
    <hr>
    <div id="app">
        <ul> 
            <li v-for="item in items">
                {{item}}
            </li>
        </ul>
    </div>

    <script type="text/javascript">
        var app = new Vue ({
            el:"#app",
            data:{
                items:[20,23,18,65,32,19,54,56,41]
            }
        })
            
    </script>
</body>
</html>
