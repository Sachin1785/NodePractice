const {readFile} = require('fs');

console.log("Fisrt task started");

readFile("first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("First task ho gaya");

});

//eadFile() method , we can read a file in a non-blocking asynchronous way, but in the fs. 
// readFileSync() method, we can synchronously read files, i.e. we are telling node. js 
// to block other parallel processes and do the current file reading process

console.log("Next task");