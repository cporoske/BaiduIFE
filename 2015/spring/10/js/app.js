
//one

/*let x = 1;
for(let x = x+1; x < 5; x++)//无法访问到x变量，不在作用域？
    console.log(x);
{
    let x = x+1;
    console.log(x);
}*/

/*let x = 1, y = 2;
let (x = x+1, y=x+2){   
    console.log(x+y);
}
console.log(x+y);*/

//仍然无法使用
/*let o = {one: 1, two: 2, three: 3};
for(let p in o){
    console.log(p);
}

forEach(let v in o){
    console.log(v);
}*/

var time = document.getElementById("test");
var c = document.getElementById("content")
time.onclick = function(e){
    console.log(e);
    c.innerHTML = new Date().toString();
}

var first = document.childNodes[0].childNodes[1];
console.log("开始childnodes, ", first, first.nodeType, first.nodeName)
var two = document.firstChild.firstChild;
console.log(two.nodeType, two.nodeName)