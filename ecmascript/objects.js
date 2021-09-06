C:\Users\Purushotham\Desktop\webdev>node
Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var o = new Object()
undefined
> typeof o
'object'
> o.name
undefined
> o.name = "Raj"
'Raj'
> o.age = 35
35
> o.company = "Oracle"
'Oracle'
> o
{ name: 'Raj', age: 35, company: 'Oracle' }
> o.name
'Raj'
> o['name']
'Raj'
> o.name = "Raj Kumar"
'Raj Kumar'
> o
{ name: 'Raj Kumar', age: 35, company: 'Oracle' }
> delete o.name
true
> o
{ age: 35, company: 'Oracle' }
>
> o.name = "Raj Kumar"
'Raj Kumar'
> for (i in o){console.log(i);}
age
company
name
undefined
> for (i of o){console.log(i);}
Thrown:
TypeError: o is not iterable
> for( i in o){ 
... console.log(i, ' ----> ', o.i);
... }
age  ---->  undefined
company  ---->  undefined
name  ---->  undefined
undefined
> o
{ age: 35, company: 'Oracle', name: 'Raj Kumar' }
> for( i in o){
... console.log(i, ' ----> ', o[i]);
... }
age  ---->  35
company  ---->  Oracle
name  ---->  Raj Kumar
undefined
> Object.keys(o)
[ 'age', 'company', 'name' ]
> Object.values(o)
[ 35, 'Oracle', 'Raj Kumar' ]
> for(i of Object.keys(o)){ console.log(i, ' ----> ', o[i]); }
age  ---->  35
company  ---->  Oracle
name  ---->  Raj Kumar
undefined
>