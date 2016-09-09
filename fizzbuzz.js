function fizzbuzz (MAX) {
    for (var i = 1; i <= MAX; i++){
        var thing = i;
        if (i % 5 == 0) {
            thing = 'Buzz';
        }
        if (i % 3 == 0) {
            thing = 'Fizz';
        }
        if (i % 5 == 0 && i % 3 == 0) {
            thing = 'FizzBuzz';
        }
        console.log(thing);
    }
}

fizzbuzz(100);