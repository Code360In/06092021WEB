C:\Users\Purushotham\Desktop\webdev>node
Welcome to Node.js v12.14.0.      
Type ".help" for more information.
> var s = 'javascript'
undefined
> // Immutable nature
undefined
> // Character are indexed from 0 - n-1
undefined
> // j => 0, a => 1, v => 2....
undefined
> s[0]
'j'
> s[1]
'a'
> s[2]
'v'
> s[2] = 'r';
'r'
> s
'javascript'
>
> s = 'jarascript'
'jarascript'
> s
'jarascript'
>
> // Length of the string
undefined
> s.length
10
>
> // index of a given substring
undefined
>
> s.indexOf('scr')
4
> s.lastIndexOf('scr')
4
> s = 'javascrscrscript'
'javascrscrscript'
> s.lastIndexOf('scr')
10
> s.indexOf('scr')
4
> s.search('scr')
4
>
> // Extracting sub-strings
undefined
>
> s.slice(3,6)
'asc'
> s.substring(3,6)
'asc'
> s.substr(3, 5)
'ascrs'
>
> // Replaceing
undefined
>
> var ip = '192-168-1-1';
undefined
> var amt = "16,500";
undefined
> amt * 15
NaN
> ip.replace('-', '.')
'192.168-1-1'
> ip
'192-168-1-1'
> ip.replace(/-/g, '.')
'192.168.1.1'
> ip
'192-168-1-1'
>
> // case conversion
undefined
>
> s
'javascrscrscript'
> s.toUpperCase()
'JAVASCRSCRSCRIPT'
> s.toLowerCase()
'javascrscrscript'
> s
'javascrscrscript'
>
> // cancatenation
undefined
>
> s
'javascrscrscript'
> var d1 = 'abcd'
undefined
> var d2 = 'mnop'
undefined
> s1
Thrown:
ReferenceError: s1 is not defined
> d1
'abcd'
> d2
'mnop'
> s.concat(d1, d2, d1)
'javascrscrscriptabcdmnopabcd'
> s
'javascrscrscript'
>
> // trimming
undefined
>
> s1 = '  hellow   '
'  hellow   '
> s1.trim()
'hellow'
>
>
> // Accessing character codes
undefined
>
> s
'javascrscrscript'
> s.chatAt(0)
Thrown:
TypeError: s.chatAt is not a function
> s.charAt(0)
'j'
> s.charCodeAt(0)
106
>
>
> // splitting and joining
undefined
>
> var t = "mary had a little lamb"
undefined
> t
'mary had a little lamb'
> t.split()
[ 'mary had a little lamb' ]
> t.split(' ')
[ 'mary', 'had', 'a', 'little', 'lamb' ]
> var w = [ 'mary', 'had', 'a', 'little', 'lamb' ]
undefined
> w
[ 'mary', 'had', 'a', 'little', 'lamb' ]
> w.join('-')
'mary-had-a-little-lamb'
>