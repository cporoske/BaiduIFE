var myObject = {
    value: 0, 
    increment: function(inc){
        this.value += typeof inc === "number" ? inc : 1;
    }
}

myObject.increment();
document.write("<pre>");
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);

document.writeln(typeof document);
document.write("</pre>");

myObject.double = function(){
    var that = this;
    var helper  = function(){
        that.value *= 2;
        console.log(this, that);
    }
    helper();
}

myObject.double();

var Quo = function(string){
    this.status = string;
}

Quo.prototype.get_status = function(){
    return this.status;
}

var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());