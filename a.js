(until => {
    var number = [2]
    for (let i=3; i<until; i++){
        prime = true;
        for (let count=2; count<i; count++){
            if (i%count == 0){
                prime = false;
                break;
            }
        } 
        if (prime) {
            number.push(i)
        }
    }
    console.log(number);
})(100)