C:\Users\Purushotham\Desktop\webdev>node
Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var x = 10
undefined
> var y = 10.345
undefined
> var z = "10.564"
undefined
> x + y
20.345
> x + z
'1010.564'
>
> a = x + z
'1010.564'
> a * 5
5052.82
> type (a)
Thrown:
ReferenceError: type is not defined
> typeof a
'string'
> a * 5
5052.82
> var  b = false
undefined
> b
false
> var c = FALSE
Thrown:
ReferenceError: FALSE is not defined
> typeof b
'boolean'
>
> z
'10.564'
> parseInt(z)
10
> parseFloat(z)
10.564
> Number(z)
10.564
> Number.MAX_VALUE
1.7976931348623157e+308
>