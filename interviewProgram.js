let a = '1234';
let op =2143;
var c=[]

for(var i=0;i<a.length;i++){
   
     if(a[i] % 2==0){
          c.push(parseInt(a[i])-1)
     }
     else if(a[i] %2 ==1){
        c.push(parseInt(a[i])+1)
     }
    
}
console.log(c)



var num1 = [1,2,3,4,5,6]
var op1 =[4,5,6,1,2,3]

function interview(a,b,c,...arg){
    
    var w = []
    w.push(a,b,c)
    return [...arg,...w]
}
console.log(interview(...num1))



var link ='https://www.youtube.com'

var x = link.split('://')
var b =x[0]
var y =x[1]
var z =y.split('.')
// var a = [y,z]
var c=[b,...z]
console.log(...c)

