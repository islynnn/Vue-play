<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="vue.js"></script>
    <title>V-FOR</title>
</head>
<body>
    <h1>v-for</h1>
    <hr>
    <div id="app">
        <ul>
            <li v-for="item in sortitems">
                {{item}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="student in sortstudents">  <!--另一种表达方式“(student,xxx) in students”-->
                {{student.name}}-{{student.age}}<!--另一种表达方式{{xxx}}:{{student.name}}-{student.age}}-->
            </li>
        </ul>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                items:[42,33,18,60,9,51,24],
                students:[
                    {name:'A',age:33},
                    {name:'B',age:14},
                    {name:'C',age:22},
                    {name:'D',age:53}
                ]
            },
            computed:{
                sortitems:function(){
                    return this.items.sort(sortNumber);
                },
                sortstudents:function(){
                    return sortByKey(this.students,'age');
                }
            }
        });
        function sortNumber(a,b) {
            return a-b;
        }
        function sortByKey(array,key) {
            return array.sort(function(a,b){
                var x=a[key];
                var y=b[key];
                return ((x<y)?-1:(x>y)?1:0);
            });
        }
    </script>
</body>
</html>
