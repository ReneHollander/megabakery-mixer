var Client = require('./lib/client.js');

var client = new Client('mixer');
client.onError(function (err) {
    console.log(err);
});

client.connect('10.0.101.29', 12345)
    .then(function () {
        console.log("connected");
    })
    .error(function (err) {
        console.log(err);
    });