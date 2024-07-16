//search "nodejs built in modules"

const fs = require("fs");   //import module

//read the file1.txt
let text = fs.readFileSync("file1.txt", "utf-8"); 
console.log(text);

//write in the file2.txt
text = text.replace("aman","naveen");
fs.writeFileSync("file2.txt",text);  