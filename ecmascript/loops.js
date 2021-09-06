undefined
> for (x in L){console.log(x);}
0
1
2
undefined
> for (x in o){console.log(x);}
age
company
name
undefined
> for (x of L){console.log(x);}
red
green
blue
undefined
> for (x of o){console.log(x);}
Thrown:
TypeError: o is not iterable
>
>
> for(i = 0; i < 10; i++){
... }
undefined
> for(i = 1; i <= 10; i++){
... if(i % 3 == 0){ break; }
... console.log(i);
... }
1
2
undefined
> for(i = 1; i <= 10; i++){
... if(i % 3 == 0){ continue; }
... console.log(i);
... }
1
2
4
5
7
8
10
undefined
>