// Write a program to determine if a number is prime or not

var N = 17;
var prime = true;
for(i = 2; i < N; i++){
    if(N % i == 0){
        prime = false;
        break;
    }
}
if(prime == true){
    console.log("THe number is prime!");
} else {
    console.log('The number is not prime!');
}
