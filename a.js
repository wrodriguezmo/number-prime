function numberPrime(until) {
    var number = [];
    for (var i = 2; i < until; i++) {
        primo = true;
        for (var count = 2; count < i; count++) {
            if (i % count == 0) {
                primo = false;
                break;
            }
            debugger    
        } 
        console.log(primo)
        if (primo) {
            console.log(i)
            number.push(i)
        }
    }
}