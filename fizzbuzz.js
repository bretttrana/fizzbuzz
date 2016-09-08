function fizzbuzz (MAX) {
    for (var i = 1; i <= MAX; i++){
        var thing = i;
        if (i % 5 == 0) {
            thing = 'buzz';
        }
        if (i % 3 == 0) {
            thing = 'fizz';
        }
        if (i % 5 == 0 && i % 3 == 0) {
            thing = 'fizzbuzz';
        }
        console.log(thing);
    }
}

fizzbuzz(100);