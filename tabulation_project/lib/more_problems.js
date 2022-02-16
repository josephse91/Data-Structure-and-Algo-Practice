// Minimum Steps to Minimize n to 1

//Given an integer n, return the minimum steps to minimize n to 1
// Available steps are:
// -Decrement n by 1
// If n is divisible by 2, then divide n by 2
// If n is divisible by 3, then divide n by 3

function minimizeStep(n) {
    if (n === 1) return 0

    let count = 0
    if (n % 3) {
        minimizeStep(n/3);
    }
    
    if (n % 2) {
        minimizeStep(n/2);
    }
    
    count += Math.min(divideThree(),divideTwo(), minimizeStep(n-1))
    return count
}

console.log(minimizeStep(10)) // 10 => 3 steps (10 => 9 => 3 => 1)
console.log(minimizeStep(15)) // 15 => 4 steps (15 => 5 => 4 => 2 => 1)
