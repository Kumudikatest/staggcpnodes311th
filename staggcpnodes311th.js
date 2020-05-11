let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (request, response) {
    s3.listObjects({
        Bucket: "cloud9-ktest",
        MaxKeys: 10
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    response.send({ "message": "Successfully executed" });
}