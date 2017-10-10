var https = require('https');
var getHTML = require('../http-functions');
var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};
function printReverse (html) {
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(html));

}

getHTML(requestOptions, printReverse);