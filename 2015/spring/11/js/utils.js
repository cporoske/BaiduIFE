


function isArray(arr) {
    return typeof arr === "object" && Object.prototype.toString.call(arr) === "[object Array]";   
}

function isFunction(fn) {
    return typeof arr === "function" && Object.prototype.toString.call(arr) === "[object function]";   
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(obj) {
    var o = {};
    for(var item in obj){
        if(obj.hasOwnProperty(item)){//如果是自有属性
            if(obj[item] instanceof Date){
                o[item] = new Date(obj[item]);
            }
            else if(obj[item] instanceof Boolean){
                o[item] = new Boolean(obj[item]);
            }
            else if(obj[item] instanceof Array){
                var temp = [];
                for(var t in obj[item]){
                    temp[t] = obj[item][t];
                }//复制数组
                o[item] = temp;
            }
            else if(obj[item] instanceof Object){
                o[item] = cloneObject(obj[item]);
            }
            else{
                o[item] = obj[item];
            }
        }
    }

    return o;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    return arr.filter(function(value, index, array){
        return array.indexOf(value) === index;
    });
}



var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]
