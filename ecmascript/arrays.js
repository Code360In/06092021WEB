C:\Users\Purushotham\Desktop\webdev>node
Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var L = ['red', 'green', 'blue'];
undefined
> typeof L
'object'
> // Accessing differnt element
undefined
> L[0]
'red'
> L[1]
'green'
> L[2]
'blue'
>
> // Mutable nature of array
undefined
> L[2] 
'blue'
> L[2] = "lightblue"
'lightblue'
> L
[ 'red', 'green', 'lightblue' ]
>
> L[2][5]
'b'
> L[2][5] = 'B'
'B'
> L
[ 'red', 'green', 'lightblue' ]
> L[2] = ["black", "grey", "white"]
[ 'black', 'grey', 'white' ]
> L
[ 'red', 'green', [ 'black', 'grey', 'white' ] ]
> L[2]
[ 'black', 'grey', 'white' ]
> L[2][1]
'grey'
> L[2][1] = "superwhite"
'superwhite'
> L
[ 'red', 'green', [ 'black', 'superwhite', 'white' ] ]
>
> // Adding elements into the array
undefined
>
> L
[ 'red', 'green', [ 'black', 'superwhite', 'white' ] ]
> L.push("orange")
4
> L
[ 'red', 'green', [ 'black', 'superwhite', 'white' ], 'orange' ]
> L.push("golden")
5
> L
[
  'red',
  'green',
  [ 'black', 'superwhite', 'white' ],
  'orange',
  'golden'
]
> L.unshift("grey")
6
> L
[
  'grey',
  'red',
  'green',
  [ 'black', 'superwhite', 'white' ],
  'orange',
  'golden'
]
> L.splice(5, 0, 'yellow')
[]
> L
[
  'grey',
  'red',
  'green',
  [ 'black', 'superwhite', 'white' ],
  'orange',
  'yellow',
  'golden'
]
>
> // ------------ Removing elements
undefined
>
> L.pop()
'golden'
> L.pop()
'yellow'
> L
[
  'grey',
  'red',
  'green',
  [ 'black', 'superwhite', 'white' ],
  'orange'
]
> L.shift()
'grey'
> L
[ 'red', 'green', [ 'black', 'superwhite', 'white' ], 'orange' ]
>  L.splice(2, 1)
[ [ 'black', 'superwhite', 'white' ] ]
> L
[ 'red', 'green', 'orange' ]
>
>
> // --------------- Searching for elements
undefined
> L
[ 'red', 'green', 'orange' ]
> L.find('green')
Thrown:
TypeError: green is not a function
    at Array.find (<anonymous>)
> L.find(e => e == 'green')
'green'
> L.find(e => e == 'black')
undefined
> L.push('green')
4
> L
[ 'red', 'green', 'orange', 'green' ]
> L.find(e => e == 'green')
'green'
> // L.find(function(e){ return e == 'green'; })
undefined
> L.findIndex(e => e == 'green')
1
> L.includes('green')
true
> L.includes('black')
false
>
>
> // ----------------------------- Re-arranging elements
undefined
>
> L
[ 'red', 'green', 'orange', 'green' ]
> L.push("yellow")
5
> L.push("maroon")
6
> L.push("cyan")
7
> L
[
  'red',    'green',
  'orange', 'green',
  'yellow', 'maroon',
  'cyan'
]
> L.reverse()
[
  'cyan',   'maroon',
  'yellow', 'green',
  'orange', 'green',
  'red'
]
> L.sort()
[
  'cyan',   'green',
  'green',  'maroon',
  'orange', 'red',
  'yellow'
]
>
> var N = [40, 100, 1, 5, 25, 10]
undefined
> N.sort()
[ 1, 10, 100, 25, 40, 5 ]
> N.sort((a,b) => a - b)
[ 1, 5, 10, 25, 40, 100 ]
> N.sort((a,b) => b - a)
[ 100, 40, 25, 10, 5, 1 ]
>
> // ------------------------------ iteration on the arrays
undefined
>
> for(x of L){ console.log(x.toUpperCase()); }
CYAN
GREEN
GREEN
MAROON
ORANGE
RED
YELLOW
undefined
> for(x of L){ console.log(x.toUpperCase(), ' -----> ', x.length); }
CYAN  ----->  4
GREEN  ----->  5
GREEN  ----->  5
MAROON  ----->  6
ORANGE  ----->  6
RED  ----->  3
YELLOW  ----->  6
undefined
></anonymous>



L = ["Raj", 35, "Oracle", "1500000", "India"]

L = ["Raj", "20-9-1988", "Oracle", "Bangalore, Karnataka", "1500000", "India"]

---------------------------------------------------------------------------------------------


L = {"name":"Raj", "age": 35, "company": "Oracle", "salary":"1500000", "country":"India"}

L = {"name":"Raj", "age": 35, "dob": "20-9-1988", "company": "Oracle", "salary":"1500000", "addr": "Bangalore, Karnataka","country":"India"}