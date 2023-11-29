const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array nat", function(arr) {
        //get a random key
        if (arr.length > 0) {
            var key = arr[Math.floor(Math.random() * arr.length)];
        }
        else {
            var key = 2;
        }

        //linearly count the occurrences
        var a1 = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == key) { a1++; }
        }
        //console.log(arr, key);
        //console.log(a1);

        //use the function
        occurrences(arr, key, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(a1 == result);
            }
        });
    });

jsc.assert(test);