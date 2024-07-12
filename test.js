a=` 
 
 
 
 
 
1
8
9
 
 
 
 
 
3
4
6
7
 
7
 
9
8
6
3
 
 
9
 
3
8
 
 
 
1
 
7
 
5
4
 
 
 
 
 
2
8
 
 
7
 
5
 
6
4
5
9
 
3
1
 
7
8
 
 
 
 
 
8
9
3
1
3
 
8
6
9
7
 
 
 `.split('')
b=[]
a.forEach(element => {
   if (element===` `){
    b.push("_")
   }  
   else if(element!==`\n`){
    b.push(element)
   }
});

console.log(b.join(""))
console.log(a.length)