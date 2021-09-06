Microsoft Windows [Version 10.0.19042.1165]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Purushotham\Desktop\OracleJET>node
Welcome to Node.js v12.14.0.
Type ".help" for more information.
> console.log("Hello Oracle!")
Hello Oracle!
undefined
> var x = 100;
undefined
> typeof x
'number'
> var y = 'javascript';
undefined
> typeof y
'string'
> var z = function(){};
undefined
> typeof z
'function'
> var x = 100;
undefined
> var = 30;
Thrown:
var = 30;
    ^

SyntaxError: Unexpected token '='
> var y = 30;
undefined
> x
100
> y
30
> // Artihmetics operators
undefined
> x + y
130
> x - y
70
> x * y
3000
> x / y
3.3333333333333335
> x ** 2
10000
> // Binary
undefined
> x >> 2
25
> // 10 -> 1010 >> 2 -> 0010 -> 2
undefined
> 10 >> 2
2
> 10 << 2
40
> // 10 -> 1010 << 2 -> 1000 -> 4
undefined
> // 1000 -> 8
undefined
> 10 << 2
40
> // 10 -> 1010 << 2 -> 101000 -> 40
undefined
> // Comparison operators
undefined
> x > y
true
> x < y
false
> x == y
false
> x != y
true
> x === y
false
>
> x = 100
100
> y = Number(100)
100
> x
100
> y
100
> x == y
true
> x === y
true
> y = new Number(100)
[Number: 100]
> x == y
true
> x === y
false
> typeof x
'number'
> typeof y
'object'
> // TErnary operator
undefined
> var a = (x > 100) ? x++ : x--;
undefined
> a
100
> x
99
>
> x
99
> x > 100
false
> var a = (x > 100)?1000:2000;
undefined
> a
2000
> x = 101
101
> var a = (x > 100)?1000:2000;
undefined
> a
1000
> x = 99
99
> var a = (x > 100) ? x++ : x--;
undefined
> a
99
> x
98
>
>
> x = 99 
99
> var a = (x > 100) ? ++x : --x;
undefined
> a
98
> x
98
>