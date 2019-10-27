const request = require("request");
const fs = require("fs");

//let toFile = test.txt; //file name given by the user

let arg = process.argv.slice(2);

//const fetch = url , filename;

request("http://nirali420.com/", (error, response, body) => {
  //console.log("error:", error); // Print the error if one occurred
  //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  //console.log("body:", body); // Print the HTML for the Google homepage.
  fs.appendFile("mynewfile1.txt", body, function(err) {
    if (err) throw err;
    console.log(`Download complete `);
  });

  fs.writeFile("toFile.txt", body, function(err) {
    console.log(`Downloaded and saved 1235 bytes to ${"./toFile.txt"}`);
  });
});
