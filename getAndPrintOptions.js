var https = require('https');
var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};
function getAndPrintHTML(options) {
  /* Add your code here */
  https.get(options, function(response) {
    temp = [];
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function(data) {
      //console.log(test);
      temp.push(data);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(temp + '\n');
    });
  });
}

//getAndPrintHTML(requestOptions);
console.log(getAndPrintHTML(requestOptions));