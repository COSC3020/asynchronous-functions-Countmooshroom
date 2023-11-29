var async = require("async");

//Find # of occurrences
function occurrences(arr, key, callback) {
    //Check for empty array
    if (arr.length == 0) {
        callback(null, 0);
    }
    //Asynchronous function
    async.reduce(arr, 0, match, function(err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });


    function match(count, item, callback) {
        let b = 0;
        if (item == key) { b = 1 };
        callback(null, count + b);
    }
}