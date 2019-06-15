var fs = require('fs');
var axios = require('axios');

function readFilePromise(path) {
    return new Promise(function(resolve, reject){
        fs.readFile(path, { encoding: 'utf8'}, function(err, data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}



// readFilePromise('./song1.txt')
// .then(function(data) {
//     console.log(data);
//     return readFilePromise('./song2.txt')
//     .then(function(song2) {
//         console.log(song2);
//         return readFilePromise('./song3.txt')
//         .then(function(song4) {
//             console.log(song4);
//         })
//     })
// });




Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt')
]).then(function(values) {
    console.log(values);
}).catch(function(error){
    console.log(error);
});