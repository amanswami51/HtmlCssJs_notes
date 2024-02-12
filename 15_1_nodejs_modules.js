//search "nodejs built in modules"

const fs = require("fs");   //add file module(fs) in this file
let text = fs.readFileSync("15_2_textfile1.txt", "utf-8");  //this statement read the file and save in text variable
console.log(text);

//We also replace/change the content of file and save that content in anthor file 
text = text.replace("address","pta");   //replace the content
fs.writeFileSync("15_3_textfile2.txt",text);       //write all content of text variable in file name new.txt


// tut-65 Blocking and Non-blocking
//synchronous or blocking
// -line by line execution

//Asynchronous or non-blocking
// -line by line execution not guaranteed
// -callbacks will fire