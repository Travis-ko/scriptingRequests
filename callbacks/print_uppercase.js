var https = require('https');
var getHTML = require('../http-functions');
var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};
function printUpperCase (html) {
console.log(html.toUpperCase());

}

getHTML(requestOptions, printUpperCase);