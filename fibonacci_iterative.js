function fib(N) {
    var prev = 0;
    var curr = 1;
    var next = 1;
    var n = 0;

    while(n < (N-1)) {
        prev = curr;
        curr = next;
        next = prev + curr;
        console.log(curr);
        n++
    }    
}
